<template>
 <div class="roles-index">
     <el-form inline>
       <el-form-item>
         <el-button size="small" type="primary" @click="edit(-1)">新增123</el-button>
       </el-form-item>
     </el-form>
     <el-table :data="itemList" size="small">
       <el-table-column label="序号" type="index" width="50"></el-table-column>
       <el-table-column label="角色名称" prop="name" min-width="200"></el-table-column>
       <el-table-column label="角色编码" prop="code" width="220"></el-table-column>
       <el-table-column label="操作" align="center" width="280">
         <template slot-scope="scope">
           <el-button size="mini" type="primary" @click="edit(scope.row)">编辑</el-button>
           <el-button size="mini" type="success">分配权限</el-button>
           <el-button size="mini" type="danger">删除</el-button>
         </template>
       </el-table-column>
     </el-table>

     <!--分页 -->
    <div style="margin-top:60px;">
        <el-pagination v-if="page.total" align="center"
        layout="prev, pager, next" :current-page.sync="page.pageNum"
        @current-change="pageChange" :page-size="search.limit" :total="page.total" />
    </div>
    <!-- dialog -->
    <el-dialog :title="dialogTitle" width="70%" :visible.sync="updateVisible">
      el-dialog
      <div class="dialog-bottom-button">
        <el-button @click="updateVisible=false">关闭</el-button>
      </div>
    </el-dialog>
 </div>
</template>

<script>
export default {
  data () {
    return {
      search: { limit: 10, offset: 0 },
      itemList: [{ name: '超级管理员', code: '3303' }],
      isAdd: true,
      page: {
        total: 1,
        pageNum: 1
      },
      updateVisible: false
    }
  },
  computed: {
    dialogTitle () {
      return this.isAdd ? '新增' : '编辑'
    }
  },
  created () {
    const ws = this.socketConnect('ws://121.40.165.18:8800')
  },
  methods: {
    async getData () {
      console.log('emmmm')
    },
    edit (row) {
      this.updateVisible = true
      if (row === -1) {
        this.isAdd = true
      } else {
        this.isAdd = false
      }
    },
    pageChange (page) {
      this.search.offset = (page - 1) * this.search.limit
      this.getData()
    },
    socketConnect (url) {
    // 客户端与服务器进行连接
      const ws = new WebSocket(url) // 返回`WebSocket`对象，赋值给变量ws
      // 连接成功回调
      ws.onopen = e => {
        console.log('连接成功', e)
        ws.send('我发送消息给服务端') // 客户端与服务器端通信
      }
      // 监听服务器端返回的信息
      ws.onmessage = e => {
        console.log('服务器端返回：', e.data)
        // do something
      }
      return ws // 返回websocket对象
    }
  }
}
</script>

<style lang='less'>
.roles-index{

}

</style>
