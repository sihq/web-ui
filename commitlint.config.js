module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'scope-enum': [2, 'always', ['docs', 'core', 'lib', 'misc', 'etc']]
    }
  };