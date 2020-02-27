import Vue from 'vue';
import './style/reset.scss'; // 消除不同浏览器之间的默认样式差异
import './style/element-variables.scss';
import './style/common.scss';
import ElementUI from 'element-ui';
import VueLazyload from 'vue-lazyload';
import router from './router';
import App from './App';

Vue.use(ElementUI);
Vue.use(VueLazyload);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // 判断是否是登录页面
  if (to.path) {
    document.title = to.meta.title;
    next();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
