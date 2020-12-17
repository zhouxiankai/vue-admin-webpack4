<template>
 <div class="side-index">
    <el-menu :default-active="defaultActiveMenu" class="el-menu-vertical-demo"
      :collapse="isCollapse" background-color="#304156" text-color="hsla(0,0%,100%,.7)">
      <template v-for="(item,index) in menuList">
        <el-submenu :index="index.toString()" :key="index" v-if="item.children && item.children.length>0">
          <template slot="title"  @click.native="toMenu(item)">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </template>
          <template v-for="item1 in item.children">
            <template v-if="item1.children && item1.children.length>0">
              <el-submenu :key="item1.path" :index="item1.path">
                <template slot="title"  @click.native="toMenu(item)">
                  <!-- <i :class="item1.meta.icon"></i> -->
                  <span slot="title">{{item1.meta.title}}</span>
                </template>
                <template v-for="item2 in item1.children">
                  <el-menu-item :key="item2.path" :index="item2.path" @click.native="toMenu(item2)">{{item2.meta.title}}</el-menu-item>
                </template>
              </el-submenu>
            </template>
            <template v-if="!item1.children">
              <el-menu-item :index="item1.path" :key="item1.path" @click.native="toMenu(item1)">
                <!-- <i :class="item1.meta.icon"></i> -->
                <span slot="title" >{{item1.meta.title}}</span>
              </el-menu-item>
            </template>
          </template>
        </el-submenu>
        <el-menu-item :index="item.path" :key="item.path" @click.native="toMenu(item)" v-if="!item.children">
          <i :class="item.meta.icon"></i>
          <span slot="title" >{{item.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
 </div>
</template>

<script>
import routers from '@/router/routers'

export default {
  data () {
    return {
      routers
    }
  },
  props: {
    isCollapse: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    defaultActiveMenu () {
      return this.$route.name
    },
    menuList () {
      return this.filterIshiddenRouters(this.routers)
    }
  },
  created () {

  },
  methods: {
    toMenu (item) {
      if (item.children || this.$route.name === item.name) return
      this.$router.push({ name: item.name })
    },
    filterIshiddenRouters (routers) {
      const result = []
      for (const item of routers) {
        if (item.hidden) continue
        const obj = {}
        obj.path = item.path
        obj.name = item.name
        obj.meta = item.meta
        obj.meta.icon = item.meta.icon || 'el-icon-empty'
        if (item.children && item.children.length > 0) {
          obj.children = this.filterIshiddenRouters(item.children)
        }
        result.push(obj)
      }
      return result
    }
  }
}
</script>

<style lang='less'>
.side-index{
  height:100vh;
  background-color: #304156;
  color:#fff;
  overflow-x: hidden;
  //overflow-y: scroll;
}
</style>
