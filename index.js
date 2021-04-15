/* eslint-disable */
// @ts-nocheck
const { devDependencies } = require('prettierx/package.json')
const version = devDependencies.prettier
module.exports = Object.assign(require('prettierx'), { version })
