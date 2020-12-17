<template>
  <div class="home-index">
    <el-container>
      <!-- class="aside-width-transform" :width="asideWidth" -->
      <el-aside class="aside-width-transform" :width="asideWidth" style="background-color: rgb(238, 241, 246)">
        <side-menu :isCollapse="isCollapse"></side-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <nav-bar :isCollapse.sync="isCollapse"></nav-bar>
        </el-header>
        <el-main>
          <!-- 首页内容，$route.name==='home'显示 -->
          <div class="el-main-index" v-if="$route.name==='home'">
            <transition name="fade-transform" mode="out-in">
              <app-index></app-index>
            </transition>
          </div>
          <!-- 其他子路由 -->
          <transition  name="fade-transform" mode="out-in" v-else >
            <router-view ></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import sideMenu from '@/components/sideMenu/index'
import navBar from '@/components/navBar/index'
import appIndex from './index'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    sideMenu, navBar, appIndex
  },
  computed: {
    asideWidth () {
      return this.isCollapse ? '80px' : '220px '
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.home-index {
  height: 100vh;
  .aside-width-transform{
    transition: width 0.2s linear;
  }
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.1s;
  }
  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }
  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>
