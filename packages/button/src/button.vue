<template>
  <button
    @click="$emit('click')"
    class="h7_button"
    :disabled="disabled"
    :class="[
    'h7_button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'h7_button--size-'+size
    ]"
  >
    <i v-if="icon !== ''" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'h7Button',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
