<template>
  <el-container class="container">
    <el-header class="header" height="100px"></el-header>
    <el-container>
      <el-aside class="aside" width="200px">
        <el-menu 
          default-active="2"
          @select="handleSelect"
        >
          <el-menu-item index="pdf">
            <i class="el-icon-notebook-2" />
            <span>参考书PDF</span>
          </el-menu-item>
          <el-menu-item index="ppt">
            <i class="el-icon-s-platform" />
            <span>PPT课件</span>
          </el-menu-item>
          <el-menu-item index="homework">
            <i class="el-icon-edit" />
            <span>课后作业</span>
          </el-menu-item>
          <el-menu-item index="comment">
            <i class="el-icon-s-comment" />
            <span>作业情况</span>
          </el-menu-item>
          <el-menu-item index="exam">
            <i class="el-icon-document" />
            <span>历年试卷</span>
          </el-menu-item>
          <el-menu-item index="mindmap">
            <i class="el-icon-s-opportunity" />
            <span>思维导图</span>
          </el-menu-item>
          <el-menu-item index="other">
            <i class="el-icon-position" />
            <span>其它</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <Filesystem :rootDir="rootDir"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
  .container {
    height: 100vh;
    width: 100vw;
  }

  .header {
    background-color: #0050b3;
  }
  .aside {
    background-color: #DCDFE6;
  }
</style>

<script>
import Filesystem from './Filesystem.vue';

export default {
  data: () => ({
    rootDir: "pdf",
  }),
  
  methods: {
    handleSelect(key) {
      this.rootDir = key;
    },
  },
  components: {
    Filesystem,
  }
}
</script>
