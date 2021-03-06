module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest"],
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-debugger": "warn",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-restricted-imports": [
      "warn",
      {
        paths: [
          {
            name: "@testing-library/react",
            message: "Please use 'test-utils' instead",
          },
          {
            name: "ts-jest/utils",
            message: "Please use 'test-utils' instead",
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.test.ts"],
      rules: {
        "@typescript-eslint/no-non-null-assertion": 0,
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
      env: {
        node: true,
      },
    },
  ],
  settings: {
    react: {
      version: "latest",
    },
  },
};
