/**
 * @author h7ml
 * Date: 2020-5-16
 */

import MetaInfo from './meta-info/index'
import h7Button from './button/index'
import h7Alert from './alert/index'
import Skeleton from './skeleton/index'
const components = [
  h7Button,
  Skeleton,
  h7Alert
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  MetaInfo.install(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  h7Button,
  Skeleton,
  h7Alert
}
