module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    "airbnb",
    'prettier'
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
plugins: ['react-refresh'],
  // ignorePatterns: ['dist', '.eslintrc.cjs'],
  //
  // settings: { react: { version: '18.2' } },
 
  rules: {
    "no-console": "off",
    "object-shorthand": "off",
    "no-unused-vars": "warn",
        "import/no-extraneous-dependencies": ["warn", {"devDependencies": false, "optionalDependencies": false, "peerDependencies": false}]
  },
};
