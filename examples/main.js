// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import '../packages/theme-default/lib/index.css'
import h7ui from '../packages/index'
Vue.config.productionTip = false

Vue.component('demo-block', demoBlock)
Vue.use(h7ui)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
