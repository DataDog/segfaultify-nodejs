'use strict'

const assert = require('assert')
const { execSync } = require('child_process')

const cwd = __dirname
const stdio = ['inherit', 'inherit', 'inherit']
const shell = 'bash'

let error

try {
  execSync(`node -e "require('.').segfaultify()"`, { cwd, stdio, shell })
} catch (e) {
  error = e
}

try {
  assert(error instanceof Error, `Expected an error.`)
  // Windows returns an exit code of 2816 for some reason.
  assert(error.signal === 'SIGSEGV' || error.status === 139 || error.status === 2816, `Expected a segmentation fault.`)
} catch (e) {
  console.error(error)
  throw e
}
