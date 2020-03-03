/*
 * @Module:
 * @FileName:
 * @Description:
 * @Author: flq
 * @Date: 2020-02-28 18:26:47
 * @LastEditors: flq
 * @LastEditTime: 2020-03-02 15:10:06
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('@/layout/Home');
const Page404 = () => import('@/views/Page404');
const HeaderDetail = () => import('@/layout/HeaderDetail');
const List = () => import('@/layout/List');

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
      path: '/headerdetail',
      name: 'headerdetail',
      meta: { title: '欧瑞宇邦' },
      component: HeaderDetail,
    },
    {
      path: '*',
      name: 'page404',
      meta: { title: '欧瑞宇邦' },
      component: Page404,
    },
    {
      path: 'list',
      name: 'list',
      meta: { title: '欧瑞宇邦' },
      component: List,
    },
  ],
});
