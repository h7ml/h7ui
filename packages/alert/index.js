/**
 * @author h7ml
 * Date: 2020-5-16
 */
import Alert from './src/alert.vue'

Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert
