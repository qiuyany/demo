<template>
  <!--外部容器-->
  <el-container class="out-container">

    <!--头部-->
    <el-header class="headerBack">
      <div class="floatLeft">测试管理平台</div>
    </el-header>

    <!-- 内部容器-->
    <el-container style="margin-top:5px;width: 100%" class="inner-container">
      <!--内部侧边栏-->

      <el-aside class="left-aside" width="200px" style="border: none">
        <el-menu class="sideMenu" router style="height: 100%;border: none;" background-color="lightslategray" text-color="#fff"
                 active-text-color="#fff">
          <template v-for="(d,index) in menuData">
            <el-submenu :index="index+'1'">
              <template slot="title" :index="d.url">
                <el-menu-item :index="d.url" >{{d.name}}</el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>

      <!--内部主体部分-->
      <el-main style="margin-left: 5px;width: 100px">
        <router-view/>
      </el-main>

    </el-container>

  </el-container>
</template>

<script>
  import menuData from './test.json';
  export default {
    data() {
      return {
        menuData
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .out-container
    height 100%
    .headerBack
      font 28px/60px '微软雅黑'
      color white
      height 60px
      background-color slategray
    .left-aside
      width 200px
      height 100%
      overflow hidden
      .sideMenu
        height 670px
        background-color slategray
        color #333
        .btn
          width 200px
          height 40px
          border-style none
    .inner-container
      height 650px

</style>
