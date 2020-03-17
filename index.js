const xo = require("eslint-config-xo/esnext");
const xoReact = require("eslint-config-xo-react");

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  globals: {
    Text: true
  },
  plugins: [
    ...xoReact.plugins,
    "promise",
    "@typescript-eslint/eslint-plugin",
    "react-native-normalized",
    "10x"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "prettier",
    "plugin:ava/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    ...xo.rules,
    ...xoReact.rules,
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
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true
      }
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
        reservedFirst: true
      }
    ],
    "react/self-closing-comp": "off",
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
    "import/no-useless-path-segments": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-duplicates": "error",
    "import/first": "error",
    // not working well with TS
    "import/named": "off",
    "import/newline-after-import": "error",
    "import/order": "warn",
    "import/no-unassigned-import": "error",
    // False triggers on TS
    "import/no-unresolved": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: true
      }
    ],
    // Too slow
    "import/no-cycle": "off",
    "import/extensions": ["error", "never", { json: "always" }],
    // Slow
    "import/no-self-import": "off",
    "promise/no-return-wrap": "error",
    "promise/param-names": "error",
    "promise/catch-or-return": "error",
    "promise/no-nesting": "error",
    "promise/no-promise-in-callback": "error",
    "promise/valid-params": "error",
    "no-shadow": [
      "error",
      {
        builtinGlobals: false,
        hoist: "all"
      }
    ],
    // Leads to errors like <>'     '</>
    "react/jsx-fragments": "off",
    "react/jsx-closing-tag-location": "off",
    // We don't want to name it IState
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
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
        imports: {
          xns: "import xns from 'xns'",
          styled: "import styled from 'styled-components'",
          sortBy: "import sortBy from 'lodash/sortBy'",
          groupBy: "import groupBy from 'lodash/groupBy'",
          View: "import {View} from 'react-native'",
          Text: "import {Text} from 'react-native-normalized'",
          Image: "import {Image} from 'react-native-normalized'",
          TextInput: "import {TextInput} from 'react-native-normalized'",
          ScrollView: "import {ScrollView} from 'react-native'",
          TouchableHighlight: "import {TouchableHighlight} from 'react-native'",
          ActivityIndicator:
            "import {ActivityIndicator} from 'react-native-normalized'",
          lighten: "import {lighten} from 'polished'",
          and: "import {and} from 'react-native-reanimated'",
          add: "import {add} from 'react-native-reanimated'",
          sub: "import {sub} from 'react-native-reanimated'",
          getWeeksInMonth: "import {getWeeksInMonth} from 'date-fns'",
          startOfMonth: "import {startOfMonth} from 'date-fns'",
          getDaysInMonth: "import {getDaysInMonth} from 'date-fns'",
          getISODay: "import {getISODay} from 'date-fns'",
          format: "import {format} from 'date-fns'",
          getWeek: "import {getWeek} from 'date-fns'",
          setDate: "import {setDate} from 'date-fns'",
          endOfWeek: "import {endOfWeek} from 'date-fns'",
          startOfWeek: "import {startOfWeek} from 'date-fns'"
        }
      }
    ]
  },
  settings: {
    react: {
      version: "16.9.0"
    },
    "import/ignore": ["expo"]
  },
  overrides: [
    {
      files: ["**.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    }
  ]
};
