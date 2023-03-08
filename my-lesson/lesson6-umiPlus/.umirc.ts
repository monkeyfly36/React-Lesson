import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index.jsx' },
    { path: '/home', component: '@/pages/home' },
  ],
  fastRefresh: {},
});
