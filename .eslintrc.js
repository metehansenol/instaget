module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  plugins: ["eslint-plugin-import", "prettier"],
  extends: ["prettier"],
  env: {
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    "prettier/prettier": 1,
    quotes: [2, "double", { avoidEscape: true }],
    "brace-style": [2, "1tbs", { allowSingleLine: false }],
    "func-style": [1, "declaration", { allowArrowFunctions: true }],
    "sort-imports": [
      1,
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
      }
    ],
    "import/order": [
      1,
      {
        groups: [["builtin"], ["external"], ["internal", "sibling", "parent", "index"]],
        "newlines-between": "always",
        alphabetize: {
          order: "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          caseInsensitive: true /* ignore case. Options: [true, false] */
        }
      }
    ],
    "object-curly-newline": [
      1,
      {
        ObjectExpression: {
          consistent: true,
          minProperties: 3
        },
        ObjectPattern: {
          consistent: true
        },
        ExportDeclaration: {
          consistent: true
        }
      }
    ],
    "no-param-reassign": [2],
    semi: [1, "always"],
    "padded-blocks": [1, "never"],
    "comma-dangle": [1, "never"],
    "no-multiple-empty-lines": [1, { max: 1, maxEOF: 1 }]
  }
};
