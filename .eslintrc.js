/*
 * @Descripttion: 
 * @version: 
 * @Author: zhouxd
 * @Date: 2023-02-24 16:41:50
 * @LastEditors: zhouxd
 * @LastEditTime: 2023-02-24 16:42:28
 */
module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
    ],

    rules: {
        // override/add rules settings here, such as:
    }
};