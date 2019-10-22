const { defaults } = require('jest-config');

module.exports = {
  setupFiles: ['<rootDir>/setup.js'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  verbose: true,
};
