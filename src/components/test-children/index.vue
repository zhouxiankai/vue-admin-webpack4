<template>
  <div>
      <div>标题：{{title}}</div>
      <div>内容：{{$attrs.content}}</div>
      <test-slot v-bind="$attrs"></test-slot>
      <slot></slot>
      <slot name="test" v-bind:row="form"></slot>
      <input type="text" v-on="$listeners">
  </div>
</template>

<script>
import testSlot from '@/components/test-slot'
export default {
  data () {
    return {
      form: {
        address: '望江国际'
      }
    }
  },
  props: ['title'],
  components: {
    testSlot
  },
  created () {
    console.log('test-children:', this.$attrs)
  },
  methods: {

  }
}
</script>

<style lang='less'>

</style>
