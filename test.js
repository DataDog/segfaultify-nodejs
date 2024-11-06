'use strict'

const assert = require('assert')
const { execSync } = require('child_process')

const cwd = __dirname
const stdio = ['inherit', 'inherit', 'inherit']

let error

try {
  execSync(`node -e "require('.').segfaultify()"`, { cwd, stdio })
} catch (e) {
  error = e
}

assert(error instanceof Error, `Expected an error but got: ${error}`)
assert(error.signal === 'SIGSEGV' || error.status === 139, `Expected a segfault but got: ${error}`)
