/*
 * @Descripttion: 
 * @version: 
 * @Author: zhouxd
 * @Date: 2023-02-22 12:55:02
 * @LastEditors: zhouxd
 * @LastEditTime: 2023-02-23 16:47:27
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [vue()]
});