module.exports = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
    {
      files: '*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
};