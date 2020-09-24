const xo = require("eslint-config-xo/esnext");
const xoReact = require("eslint-config-xo-react");

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Text: "off",
  },
  plugins: [
    ...xoReact.plugins,
    "promise",
    "@typescript-eslint/eslint-plugin",
    "react-native-normalized",
    "10x",
    "fp",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "prettier",
  ].filter(Boolean),
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...xo.rules,
    ...xoReact.rules,
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: true,
      },
    ],
    "react/prop-types": "off",
    camelcase: "off",
    // Prettier will take care of it
    "@typescript-eslint/indent": "off",
    "guard-for-in": "off",
    "react/forbid-component-props": "off",
    "no-console": "off",
    "no-await-in-loop": "off",
    "capitalized-comments": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-indent": "off",
    "react/jsx-wrap-multilines": "off",
    "no-mixed-operators": "off",
    "no-mixed-spaces-and-tabs": "off",
    "operator-linebreak": "off",
    "space-before-function-paren": "off",
    "react/jsx-child-element-spacing": "off",
    "no-template-curly-in-string": "error",
    "react-native-normalized/forbid-native-components": "error",
    "default-case": "error",
    "ava/no-ignored-test-files": "off",
    "ava/use-test": "off",
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
      },
    ],
    "generator-star-spacing": "off",
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: true,
        reservedFirst: true,
      },
    ],
    "react/jsx-no-target-blank": "off",
    "react/no-unsafe": "warn",
    "react/no-did-mount-set-state": "error",
    "react/no-deprecated": "warn",
    "react/no-this-in-sfc": "error",
    "react/no-direct-mutation-state": "error",
    "no-warning-comments": "warn",
    "react/jsx-indent-props": "off",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-useless-path-segments": "off",
    "import/no-named-as-default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-duplicates": "off",
    // Slow and superfluos with TS
    "import/first": "error",
    "import/default": "off",
    "import/extensions": "off",
    // not working well with TS
    "import/named": "off",
    "import/namespace": "off",
    "import/export": "error",
    "import/newline-after-import": "error",
    "import/no-unassigned-import": "off",
    // False triggers on TS
    "import/no-unresolved": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true,
      },
    ],
    // Too slow
    "import/no-cycle": "off",
    // Slow
    "import/no-self-import": "off",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-nesting": "error",
    "promise/no-promise-in-callback": "error",
    "promise/valid-params": "error",
    "@typescript-eslint/no-shadow": [
      "error",
      {
        builtinGlobals: false,
        hoist: "all",
      },
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          "{}": false,
        },
        extendDefaults: true,
      },
    ],
    // Leads to errors like <>'     '</>
    "react/jsx-fragments": "off",
    "react/jsx-closing-tag-location": "off",
    // We don't want to name it IState
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-regexp-exec": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-interface": "off",
    // Conflicts with prettier
    "react/jsx-curly-newline": "off",
    // currently has a bug
    "react/jsx-curly-brace-presence": "off",
    "require-atomic-updates": "off",
    "10x/no-full-import": "error",
    "10x/react-in-scope": "error",
    "10x/auto-import": [
      "error",
      {
        imports: require("./auto-import-rules"),
      },
    ],
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: true,
        allowObject: true,
      },
    ],
    "fp/no-mutating-methods": [
      "error",
      {
        allowedObjects: ["lodash"],
      },
    ],
    "react/no-unused-prop-types": "off",
    "no-shadow": 0,
    "no-undef": 0,
  },
  settings: {
    react: {
      version: "16.9.0",
    },
    "import/ignore": ["expo"],
  },
  overrides: [
    {
      files: ["**.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
