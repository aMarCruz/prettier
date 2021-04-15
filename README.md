# Fake Prettier

This package allows to use [Prettierx](https://www.npmjs.com/package/prettierx) instead [Prettier](https://www.npmjs.com/package/prettier) for packages that not supports Prettierx.

Good examples are [prettier-eslint](https://www.npmjs.com/package/prettier-eslint) and the [VS Code Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension.

You can use it also with [eslint-plugin-prettierx](https://www.npmjs.com/package/eslint-plugin-prettierx).

## Setup

Install aMarCruz/prettier, as prettierx is a dependency of this you don't need install it:

```sh
yarn add aMarCruz/prettier -D
# or
npm i aMarCruz/prettier -D
```

## Schema

If you want to include support for the additional PrettieX options, add the following to the `json.schema` property in your VS Code settings:

```json
{
  "json.schemas": [
    {
      "fileMatch": [".prettierrc", ".prettierrc.json"],
      "url": "https://cdn.jsdelivr.net/gh/aMarCruz/prettier/schema.json"
    }
  ],
}
```

## License

The MIT license.
