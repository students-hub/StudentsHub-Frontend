import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';

import App from './App.vue';

import './public-path';
// import './mock';
import './filters/wrapPath';
import './directives/context-menu';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/' : '/child/vue/',
    mode: 'history'
  });

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] vue app mount');
  render(props);
}
export async function unmount() {
  console.log('[vue] vue app unmount');
  instance.$destroy();
  // instance.$el.innerHTML = '';
  // instance = null;
  // router = null;
}