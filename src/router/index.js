import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('@/layout/Home');
const Page404 = () => import('@/views/Page404');

export default new VueRouter({
  mode: 'history',
  base: '/oryb/',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      meta: { title: '欧瑞宇邦' },
      component: Home,
    },
    {
      path: '*',
      name: 'page404',
      meta: { title: '欧瑞宇邦' },
      component: Page404,
    },
  ],
});
