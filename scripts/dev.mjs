import { spawn } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const env = { ...process.env }

// Nuxt vite-node uses a unix socket under TMPDIR. On macOS the path must stay
// within AF_UNIX limits (~104 bytes). Long default temp paths break dev SSR.
if (process.platform === 'darwin') {
  env.TMPDIR = '/tmp'
}

function stopStaleDevServer() {
  const lockPath = join(root, '.nuxt', 'nuxt.lock')
  if (!existsSync(lockPath)) return

  try {
    const lock = JSON.parse(readFileSync(lockPath, 'utf8'))
    if (lock.cwd !== root || lock.command !== 'dev' || !lock.pid) return
    process.kill(lock.pid, 0)
    console.log(`[dev] Stopping stale Nuxt dev server (pid ${lock.pid}, port ${lock.port ?? 'unknown'})`)
    process.kill(lock.pid, 'SIGTERM')
  } catch {
    // Process already gone; Nuxt will replace the lock on start.
  }
}

stopStaleDevServer()

const child = spawn('nuxt', ['dev'], {
  cwd: root,
  env,
  stdio: 'inherit',
  shell: process.platform === 'win32',
})

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal)
  process.exit(code ?? 0)
})
