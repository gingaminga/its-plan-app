import expoConfig from 'eslint-config-expo/flat.js';
import perfectionist from 'eslint-plugin-perfectionist';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    plugins: {
      unicorn,
    },
    rules: {
      ...unicorn.configs.recommended.rules,
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
      'unicorn/no-null': 'off',
      'unicorn/prefer-module': 'off', // React Native/Expo에서 정적 자산(이미지, 폰트) 로드 시 require() 사용 허용
      'unicorn/prevent-abbreviations': 'off', // 변수명/타입명 약어 허용 (Props, dir 등 React/React Native에서 일반적으로 사용되는 약어)
    },
  },
  {
    ...perfectionist.configs['recommended-alphabetical'],
    rules: {
      ...perfectionist.configs['recommended-alphabetical'].rules,
      'perfectionist/sort-imports': ['error', { newlinesBetween: 'never' }],
    },
  },
  // unicorn 플러그인이 ES 모듈로 작성되어 ESLint 파서와 호환성 문제가 있음
  {
    files: ['eslint.config.mjs'],
    rules: {
      'import/namespace': 'off',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
    },
  },
]);
