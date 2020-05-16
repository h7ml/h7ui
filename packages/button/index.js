/**
 * @author h7ml
 * Date: 2020-5-16
 */
import Button from './src/button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
