import { defineConfig } from 'dumi';
const repo = 'chemical-components-diff-poc'; // 项目名
export default defineConfig({
  title: 'diff-doc',
  outputPath: 'docs-dist',
  mfsu: {},
  theme: {
    '@primary-color': '#e71316',
  },
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  exportStatic: {},
});
