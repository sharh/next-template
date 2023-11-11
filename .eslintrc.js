/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    // npm install --save-dev @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
    // npm install --save-dev eslint-config-prettier
    "prettier",
    // npm install --save-dev eslint-plugin-react
    "plugin:react/jsx-runtime",
    // npm install --save-dev @next/eslint-plugin-next
    "plugin:@next/next/recommended",
    // npm install --save-dev eslint-plugin-react-hooks
    "plugin:react-hooks/recommended",
    // npm install eslint-plugin-import --save-dev
    "plugin:import/recommended",
    // 支持ts
    "plugin:import/typescript",
  ],
  globals: {
    wx: "readonly",
  },
  settings: {
    react: {
      version: "detect",
    },
    next: {
      rootDir: ".",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".mdx"],
    },
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  // npm install --save-dev @typescript-eslint/parser
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  ignorePatterns: [
    "!.lintstagedrc.cjs",
    "!.stylelintrc.cjs",
    "!.commitlintrc.cjs",
    "!.eslintrc.js",
  ],
  overrides: [
    {
      files: [
        ".eslintrc.{js,cjs}",
        "**/*.tsx",
        "**/*.cjs",
        "**/*.ts",
        "**/*.mjs",
        "**/*.jsx",
        "**/*.mdx",
      ],
      rules: {
        "@typescript-eslint/no-explicit-any": "warn",
        "import/first": 2,
      },
    },
  ],
  noInlineConfig: true,
};
