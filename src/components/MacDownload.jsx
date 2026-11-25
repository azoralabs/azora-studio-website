import { useEffect, useState } from 'react'

const downloads = '/downloads/macos-arm64/'

export default function MacDownload() {
  const [release, setRelease] = useState(undefined)

  useEffect(() => {
    const controller = new AbortController()
    fetch(`${downloads}catalog.json`, { signal: controller.signal, cache: 'no-cache' })
      .then((response) => {
        if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) return null
        return response.json()
      })
      .then((catalog) => {
        const installer = catalog?.launcher
        const available = catalog?.schema === 1 &&
          catalog.distribution === 'public' &&
          catalog.platform === 'macos-arm64' &&
          /^Azora-Launcher-[A-Za-z0-9.-]+-macos-arm64\.dmg$/.test(installer?.file)
        setRelease(available ? catalog : null)
      })
      .catch(() => { if (!controller.signal.aborted) setRelease(null) })
    return () => controller.abort()
  }, [])

  const installer = release?.launcher
  return (
    <section id="download" className="scroll-mt-24 mb-24 max-w-4xl mx-auto rounded-2xl border border-az-75 bg-az-85 p-6 sm:p-9">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-az-10">Azora Launcher for Mac</h2>
          <p className="mt-2 text-sm text-az-45">
            Apple silicon{release && ` · macOS ${release.minimumMacOS} or later · ${installer.label}`}
          </p>
        </div>
        {installer ? (
          <a href={`${downloads}${installer.file}`} download
            className="inline-flex justify-center rounded-lg bg-az-primary px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">
            Download for Mac
          </a>
        ) : release === null ? (
          <p className="text-sm text-az-45">The macOS download is being prepared.</p>
        ) : (
          <p className="text-sm text-az-45" role="status">Checking availability…</p>
        )}
      </div>
      <ol className="mt-6 grid gap-4 text-sm text-az-45 sm:grid-cols-3">
        <li><strong className="mb-1 block text-az-10">Install the Launcher</strong>Open the DMG and drag Azora Launcher into Applications.</li>
        <li><strong className="mb-1 block text-az-10">Install Studio</strong>Open the Launcher and select Install next to Azora Studio. The matching Engine is included.</li>
        <li><strong className="mb-1 block text-az-10">Create a project</strong>Launch Studio and choose a template. New projects go to <code>Documents/Azora</code> by default.</li>
      </ol>
      <p className="mt-5 text-xs text-az-45">Building and running projects uses the Apple command-line developer tools. Compiling custom Metal shaders also requires the Metal toolchain.</p>
    </section>
  )
}
