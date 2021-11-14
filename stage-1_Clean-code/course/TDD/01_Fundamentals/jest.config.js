module.exports = {
  roots: ['<rootDir>'],
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: './',
        outputName: 'test-reporter.xml',
        reportedFilePath: 'absolute',
      },
    ],
  ],
  testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
  verbose: false,
  // coveragePathIgnorePatterns: ['.*I.*([A-Z]|[a-z]).ts?$'],
};
