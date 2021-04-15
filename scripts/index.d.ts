type Dict<T = unknown> = { [k: string]: T }

type DefaultValue = string | number | boolean | any[]
type SrcDefault = DefaultValue | ({ since?: string, value: DefaultValue }[])
type Choice = { value: string, description: string }

type SrcOption = {
  array?: boolean
  category: string
  choices?: Choice[]
  default?: SrcDefault
  description: string
  since?: string
  type: string
}

type ItemScheme = {
  description: string
  default?: DefaultValue,
  items?: Dict
  type?: string
  oneOf?: { enum: string[], description: string }[]
}

declare module "prettierx" {
  const PrettierX: typeof import('prettier')
  export = PrettierX
}
declare module 'prettierx/src/main/core-options' {
  export const options: Dict<SrcOption>
}
declare module 'prettierx/src/common/common-options' {
  const options: Dict<SrcOption>
  export = options
}
declare module 'prettierx/src/language-css/options' {
  const options: Dict<SrcOption>
  export = options
}
declare module 'prettierx/src/language-graphql/options' {
  const options: Dict<SrcOption>
  export = options
}
declare module 'prettierx/src/language-html/options' {
  const options: Dict<SrcOption>
  export = options
}
declare module 'prettierx/src/language-js/options' {
  const options: Dict<SrcOption>
  export = options
}
declare module 'prettierx/src/language-markdown/options' {
  const options: Dict<SrcOption>
  export = options
}
declare module 'prettierx/src/language-yaml/options' {
  const options: Dict<SrcOption>
  export = options
}
