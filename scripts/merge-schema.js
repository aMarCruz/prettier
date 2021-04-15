// @ts-check
/*

  Original schema in https://json.schemastore.org/prettierrc

*/
const { writeFile } = require('fs').promises
const { resolve } = require('path')

const prettier = require('prettierx')

const coreOptions = require('prettierx/src/main/core-options').options
const commonOptions = require('prettierx/src/common/common-options')
const cssOptions = require('prettierx/src/language-css/options')
const graphqlOptions = require('prettierx/src/language-graphql/options')
const htmlOptions = require('prettierx/src/language-html/options')
const jsOptions = require('prettierx/src/language-js/options')
const mdOptions = require('prettierx/src/language-markdown/options')
const yamlOptions = require('prettierx/src/language-yaml/options')

const schemaBase = require('./schema-base.json')

const outfile = resolve('./schema.json')

/**
 * Try to format with prettier
 * @param {*} props
 */
const saveScheme = async props => {
  const schema = { ...schemaBase }
  schema.definitions.optionsDefinition.properties = props

  const conf = await prettier.resolveConfig(outfile)
  const json = prettier.format(JSON.stringify(schema), { ...conf, filepath: outfile })

  return writeFile(outfile, json, 'utf8')
}

/**
 * @param {SrcDefault} defs
 * @returns {DefaultValue|undefined}
 */
const getDefault = defs => {
  return Array.isArray(defs) && defs.length ? defs[defs.length - 1].value : defs
}

/**
 * @param {string} type
 */
const transType = type => {
  switch (type) {
    case 'int':
      return 'integer'
    case 'path':
      return 'string'
    case 'choice':
      return undefined
    default:
      return type
  }
}

/**
 * @param {Dict<SrcOption>} src
 * @param {Dict<ItemScheme>} dest
 */
const addOptions = (src, dest) => {
  //
  Object.keys(src).forEach(name => {
    const { array: arr, type, description, choices, default: defs } = src[name]

    /** @type {ItemScheme} */
    const option = {
      description: description || '',
      default: defs && getDefault(defs),
      type: arr ? 'array' : transType(type),
    }

    if (option.type === 'array') {
      option.items = { type: 'string' }
    }

    if (choices) {
      option.oneOf = choices.map(c => ({
        enum: [c.value],
        description: c.description || '',
      }))
    }

    dest[name] = option
  })

  return dest
}

const mergeSchema = () => {
  /**
   * @type {Dict<ItemScheme>}
   */
  const tmp = {}

  addOptions(coreOptions, tmp)
  addOptions(commonOptions, tmp)
  addOptions(cssOptions, tmp)
  addOptions(graphqlOptions, tmp)
  addOptions(htmlOptions, tmp)
  addOptions(jsOptions, tmp)
  addOptions(mdOptions, tmp)
  addOptions(yamlOptions, tmp)

  /**
   * @type {Dict<ItemScheme>}
   */
  const options = {}

  Object.keys(tmp)
    .sort()
    .forEach(k => {
      options[k] = tmp[k]
    })

  saveScheme(options)
}

mergeSchema()
