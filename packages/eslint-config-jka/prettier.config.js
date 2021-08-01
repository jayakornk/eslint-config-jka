module.exports = {
  printWidth: 999999,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  overrides: [
    {
      files: '*.yml',
      options: {
        singleQuote: false,
      },
    },
  ],
};
