/* eslint-disable */
// @ts-nocheck
const { 'prettier-version': prettierVersion, devDependencies } = require('prettierx/package.json')
const version = prettierVersion || devDependencies.prettier
module.exports = Object.assign(require('prettierx'), { version })
