<template>
  <div>
      slot测试
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        name: 'zxk', age: 25
      }
    }
  },
  props: {
    content: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  created () {
    console.log('test-slot:', this.$attrs)
  },
  methods: {

  }
}
</script>

<style lang='less'>

</style>
