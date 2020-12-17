<template>
  <div>
      <el-dialog v-bind="$attrs" :visible="visible" @update:visible="changeVisible" v-on="$listeners">
          <slot name="content"></slot>
          内容
      </el-dialog>
  </div>
</template>

<script>
export default {
//   inheritAttrs: false,
  data () {
    return {

    }
  },
  props: {
    visible: { type: Boolean }
  },
  components: {

  },
  created () {

  },
  methods: {
    changeVisible (val) {
      this.$emit('update:visible', val)
    }
  }
}
</script>

<style lang='less'>

</style>
