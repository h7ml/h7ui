/**
 * @author h7ml
 * Date: 2020-5-16
 */

import MetaInfo from './meta-info/index'
import h7Button from './button/index'
import h7LoadingBar from './loading-bar/index'

const components = [
    h7Button,
    h7LoadingBar
]

const install = function(Vue) {
    if (install.installed) return
    components.map(component => Vue.component(component.name, component))
    MetaInfo.install(Vue)
    Vue.prototype.$loading = h7LoadingBar
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    h7Button,
    h7LoadingBar
}
