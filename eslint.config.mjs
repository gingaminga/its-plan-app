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
    },
  },
  {
    ...perfectionist.configs['recommended-alphabetical'],
    rules: {
      ...perfectionist.configs['recommended-alphabetical'].rules,
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
