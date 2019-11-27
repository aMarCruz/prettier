#!/usr/bin/env node
/* eslint-disable */
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
