// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
import './assets/css/initial.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import './assets/css/swiper.min.css';
import './assets/js/swiper.js'
// import Calendar from 'vue2-datepick';
// Vue.use(Calendar);
 // import VueBetterCalendar from 'vue-better-calendar'
 //  Vue.use(VueBetterCalendar)

// import $ from 'jquery'
Vue.config.productionTip = false
 router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面meta */
  if(to.meta.content){
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
