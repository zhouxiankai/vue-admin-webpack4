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
    <el-table :data="list" small>
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="住址" prop="address"></el-table-column>
    </el-table>
    <el-pagination
      class="mt-60"
      align="center"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
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
      num: 4,
      list: [
        { name: 'jerry', age: 18, address: '温州' }, { name: 'tom', age: 22, address: '杭州' }, { name: 'mary', age: 20, address: '上海' }
      ]
    }
  },
  components: {
    testChildren, cDialog
  },
  created () {
    console.log('revert-1')
    console.log('revert-2')
<<<<<<< HEAD
    console.log('revert-3')
    console.log('revert-4')
=======
>>>>>>> parent of ac2e5ad8... revert-3
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
  .mt-60{
    margin-top:60px;
  }
}
</style>
