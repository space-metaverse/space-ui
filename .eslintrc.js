module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [
      'tsconfig.json',
    ],
    sourceType: 'module',
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["*.stories.tsx"],
      excludedFiles: "storybook-static/**",
    }
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
  ],
  rules: {
    'indent': ['error', 4],
    'no-bitwise': ['error', { allow: ['~'] }],
    'space-unary-ops': [2, {
      words: true,
      nonwords: false,
      overrides: {
        '!': true,
        '!!': true,
      },
    }],
    'react/prop-types': 0,
    'react/jsx-indent': ['error', 4],
    'react/jsx-indent-props': ['error', 4],
    '@typescript-eslint/indent': ['error', 4],
    'import-helpers/order-imports': ['warn', {
      newlinesBetween: 'always',
      groups: [
        '/^react/',
        'module',
        '/^@shared/',
        '/^@core/',
        '/^@modules/',
        '/^@configs/',
        '/^~/',
        ['parent', 'sibling', 'index'],
      ],
      alphabetize: { order: 'asc', ignoreCase: true },
    },
    ],
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
    }],
    "linebreak-style": 0,
  },
};
