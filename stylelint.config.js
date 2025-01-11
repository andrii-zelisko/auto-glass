module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'selector-id-pattern': /^[a-z][a-zA-Z0-9]*$/,
    'import-notation': 'string',
    'font-family-name-quotes': 'always-unless-keyword',
    'rule-empty-line-before': 'always-multi-line',
    'comment-empty-line-before': 'never',
    'color-hex-length': 'long',
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'percentage',
    'no-descending-specificity': null,
    'no-duplicate-selectors': null,
  },
}
