/** @format */

module.exports = {
  'source/**/*.{ts,tsx}': ['prettier --write', 'eslint --fix', () => 'tsc -p tsconfig.json'],
  'source/**/*.{js,jsx}': ['prettier --write', 'eslint --fix'],
  'source/**/*.json': ['prettier --write', 'eslint --fix'],
};
