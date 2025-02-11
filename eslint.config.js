import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'sort-imports': 
        [
          "error", 
          { 
            "ignoreCase": true, 
            "ignoreDeclarationSort": true 
          }
        ],
      '@typescript-eslint/consistent-type-imports': 'error',
    }
  },
  {
    ignores: ["**/build/", "webpack.config.js"]
  }
]
