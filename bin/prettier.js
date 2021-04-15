#!/usr/bin/env node
// @ts-nocheck

"use strict";

var prettier
try {
  prettier = require.resolve('prettierx/src/cli')
} catch (e) {
  console.error('Cannot find prettierx cli')
  process.exitCode = 1
}

if (prettier) {
  require(prettier).run(process.argv.slice(2))
}
