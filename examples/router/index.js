import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/install',
      name: 'install',
      // eslint-disable-next-line global-require
      component: r => require.ensure([], () => r(require('../docs/install.md')))
    }
  ]
})
