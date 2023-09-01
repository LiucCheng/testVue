/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 2,
    'no-debugger': 2,
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
    'max-params': [0, 5],
    'no-undef': 0,
    '@typescript-eslint/no-require-imports': 0,
    // 最新的规则校验要求不建议使用index或者单各单词，防止与母版index冲突，虽然我并未遇到这样的问题，
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unreachable': 2,
    'comma-dangle': [2, {
      "arrays": "never",
      "objects": "always",
      "imports": "never",
      "exports": "never",
      "functions": "never"
    }],
    // 2位缩进
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    // 强制使用一致的反勾号、双引号或单引号
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    // err的错误回调必须处理
    'handle-callback-err': [2, '^(err|error)$'],
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: true,
        allowCoexistStyle: true,
      },
    ],
  },
}
