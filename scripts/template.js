module.exports = {
  vueTemplate: compoenntName => {
    return `<template>
  <div class="${compoenntName}-wrap">
    ${compoenntName}页面
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {

  }
}
</script>
<style lang="less" scoped>
.${compoenntName}-wrap {
  
}
</style>
  `
  },
  entryTemplate: `import Main from './main.vue'
  export default Main`
}
