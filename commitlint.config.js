module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-case': [2, 'always', 'lower-case'],
    'subject-full-stop': [2, 'always', '.'],
    'body-case': [2, 'always', 'sentence-case'],
    'body-min-length': [2, 'always', 0]
  }
}