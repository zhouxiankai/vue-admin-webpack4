<template>
 <div class="nav-bar-index">
     <div class="nav-left">
       <div class="collapse">
         <el-button size="small" :type="btnType" @click="changeCollapse">{{btnText}}</el-button>
       </div>
       <div class="breadcrumb">
         <el-breadcrumb separator="/">
            <template v-for="(item,index) in matchedRoter" >
                <template v-if="index===0">
                    <el-breadcrumb-item :key="index" :to="{name:'home'}">
                      首页
                    </el-breadcrumb-item>
                </template>
                <!-- 防止最后个导航点击报错 -->
                <template v-if="index>0 && item.name && (index!==matchedRoter.length-1)">
                    <el-breadcrumb-item :key="index" :to="{name:item.name}">
                      <template v-if="item.meta">{{item.meta.title}}</template>
                    </el-breadcrumb-item>
                </template>
                <template v-if="index>0 && item.name && (index===matchedRoter.length-1)">
                    <el-breadcrumb-item :key="index">
                      <template v-if="item.meta">{{item.meta.title}}</template>
                    </el-breadcrumb-item>
                </template>
                <template v-if="index>0 && !item.name">
                    <el-breadcrumb-item :key="index">
                      <template v-if="item.meta">{{item.meta.title}}</template>
                    </el-breadcrumb-item>
                </template>
            </template>
         </el-breadcrumb>
       </div>
     </div>
     <div class="nav-right">
       <el-dropdown @command="handleCommand">
         <div style="display:flex;align-items:center;">
            <el-avatar>user</el-avatar>
            <i class="el-icon-caret-bottom" style="margin-left:5px;"></i>
         </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="updatepassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
     </div>
 </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  computed: {
    btnType () {
      return this.isCollapse ? 'primary' : ''
    },
    btnText () {
      return this.isCollapse ? '展开' : '收缩'
    },
    matchedRoter () {
      return this.$route.matched
    }
  },
  props: ['isCollapse'],
  components: {

  },
  created () {
    console.log(this.matchedRoter)
  },
  methods: {
    changeCollapse () {
      this.$emit('update:isCollapse', !this.isCollapse)
    },
    toBreadcrumb (item) {
      console.log(item)
    },
    breadHandle (item) {
      console.log(event)
      if (item.name === this.$route) event.stopPropagation()
    },
    handleCommand (val) {
      switch (val) {
        case 'changepassword':
          // 跳修改密码页面
          break
        case 'logout':
          // 跳登录页面
          this.$router.push({ name: 'login' })
          break
      }
    }
  }
}
</script>

<style lang='less'>
.nav-bar-index{
  height:100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
  border-bottom:1px solid #f5f5f5;
  .nav-left{
    display:flex;
    .breadcrumb{
      margin-left:20px;display:flex;align-items: center;
      .breadcrumb-container{
        display:flex;
      }
    }
  }
  .nav-right{padding-right:40px;}
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
}
</style>
