<template>
  <div class="faclitator-index">
    <test-children :key="childrenKey" @input="a" @change="b" title="人民日报" content="抗疫英雄凯旋回归" handle-click="handle-click">
      <!-- <test-slot slot="footer"></test-slot> -->
      <p slot="test" slot-scope="scope">{{scope.row.address}}</p>
    </test-children>
    <input type="text" v-model="inputValue">
    <el-button size="mini" @click="changeKey">ClickMe!</el-button>
    <el-input-number v-model="num" :min="1" :max="10"></el-input-number>
    <c-dialog :visible.sync="visible"  width="800px" title="测试" @open="openHandle"></c-dialog>
  </div>
</template>

<script>
import testChildren from '@/components/test-children'
import cDialog from '@/components/common/c-dialog'

export default {
  data () {
    return {
      hidden: false,
      count: 1,
      childrenKey: 1,
      inputValue: '等等',
      visible: false,
      num: 4
    }
  },
  components: {
    testChildren, cDialog
  },
  created () {
    const a = 1
    // const res = await import('@/lib/utils.js')
    const arr = [1, 2, 3]
    arr[0] = 2
    console.log(arr)
    // this.test(arr)
  },
  methods: {
    a (val) {
      console.log(val.target.value)
    },
    b () {
      console.log('change启动')
    },
    search () {

    },
    changeKey () {
      this.childrenKey++
      this.visible = true
    },
    test (list) {
      list.forEach(async (x, index) => {
        const res = await this.square(x)
        setTimeout(() => {
          console.log(res)
        }, (index + 1) * 1000)
      })
    },
    square (num) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(num * num)
        }, 1000)
      })
    },
    openHandle () {
      console.log('open')
    }
  }
}
</script>

<style lang="less" scoped>
.faclitator-index{

}
</style>
