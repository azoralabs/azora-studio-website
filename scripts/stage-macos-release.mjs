import { createHash } from 'node:crypto'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const tag = process.argv[2]
if (!/^[A-Za-z0-9.-]+$/.test(tag ?? '')) throw new Error('Invalid macOS release tag')

const repo = 'azoralabs/azora-studio'
const headers = { Accept: 'application/vnd.github+json' }
if (process.env.GH_TOKEN) headers.Authorization = `Bearer ${process.env.GH_TOKEN}`
const response = await fetch(`https://api.github.com/repos/${repo}/releases/tags/${tag}`, { headers })
if (response.status === 404) {
  console.log('No public Apple silicon release has been published yet.')
  process.exit(0)
}
if (!response.ok) throw new Error(`Could not read macOS release metadata (${response.status})`)
const release = await response.json()
if (release.draft) throw new Error('The macOS release must be published before deploying its downloads')

const releaseBase = `https://github.com/${repo}/releases/download/${tag}/`
async function download(name, limit) {
  const asset = release.assets.find((item) => item.name === name)
  if (!asset || asset.browser_download_url !== `${releaseBase}${name}` || asset.size > limit) {
    throw new Error(`Missing or invalid release asset ${name}`)
  }
  const file = await fetch(asset.browser_download_url)
  if (!file.ok) throw new Error(`${name} download failed (${file.status})`)
  const bytes = Buffer.from(await file.arrayBuffer())
  if (bytes.length !== asset.size) throw new Error(`Incomplete download of ${name}`)
  return bytes
}

const manifest = await download('catalog.json', 65536)
const catalog = JSON.parse(manifest.toString('utf8'))
if (catalog.schema !== 1 || catalog.distribution !== 'public' || catalog.platform !== 'macos-arm64' ||
    !/^\d+\.\d+(\.\d+)?$/.test(catalog.minimumMacOS) || !Array.isArray(catalog.studio) || !catalog.studio.length) {
  throw new Error('Invalid public macOS release catalog')
}
const installer = catalog.launcher
if (!/^Azora-Launcher-[A-Za-z0-9.-]+-macos-arm64\.dmg$/.test(installer?.file)) {
  throw new Error('The macOS release catalog needs a Launcher DMG')
}
const versions = new Set()
for (const item of catalog.studio) {
  if (!/^[0-9][A-Za-z0-9.+-]*$/.test(item.version) ||
      !/^[0-9][A-Za-z0-9.-]*$/.test(item.label) ||
      !/^[1-9][0-9]{0,8}$/.test(item.versionCode) ||
      !/^Azora-Studio-[A-Za-z0-9.-]+-macos-arm64\.zip$/.test(item.file) ||
      versions.has(item.version)) {
    throw new Error('Invalid or duplicate Studio version in release catalog')
  }
  versions.add(item.version)
}

const out = 'dist/downloads/macos-arm64'
await mkdir(out, { recursive: true })
for (const asset of [installer, ...catalog.studio]) {
  if (!/^[0-9a-f]{64}$/.test(asset.sha256)) throw new Error(`Invalid checksum for ${asset.file}`)
  const bytes = await download(asset.file, 1024 * 1024 * 1024)
  if (bytes.length !== asset.bytes || createHash('sha256').update(bytes).digest('hex') !== asset.sha256) {
    throw new Error(`Release checksum mismatch for ${asset.file}`)
  }
  await writeFile(join(out, asset.file), bytes)
}
await writeFile(join(out, 'catalog.json'), manifest)
