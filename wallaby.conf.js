module.exports = function (wallaby) {
    return {
      files: [
        'src/**/*.ts',
        '!src/**/*.spec.ts',
      ],

      tests: [
        'src/**/*.spec.ts'
      ],
      filesWithNoCoverageCalculated: ['src/**/*.mock.ts'],
      testFramework: 'jest',
      env: {
        type: 'node'
      },
      compilers: {
        '**/*.ts': wallaby.compilers.typeScript({ }),
      }
    };
  };