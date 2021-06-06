<template>
  <div id="filesystem">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item 
        :to="dirs.length !== 0? {}: undefined"
        @click.native="handleClick"
      >
        {{ rootDir }}
      </el-breadcrumb-item>
      <el-breadcrumb-item 
        v-for="(path, index) in dirs" 
        :key="index"
        :to="index !== dirs.length - 1? {} : undefined"
        @click.native="handleDirClick(index)"
      >
        {{ path }}
      </el-breadcrumb-item>
      <span role="presentation" class="el-breadcrumb__separator"></span>
    </el-breadcrumb>

    <div class="main">
      <div v-for="(file, index) in files" :key="index">
        <Folder 
          v-if="file.type === 'folder'" 
          class="folder"
          :folder-name="file.name"
          @enterFolder='enterFolder'
        />
        <File 
          v-if="file.type === 'file'" 
          class="file"
          :file-name="file.name"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .main {
    padding: 0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .folder, .file {
    margin: 30px;
    margin-right: 75px;
  }
</style>

<script>
import File from '../components/File.vue';
import Folder from '../components/Folder.vue';

import { list2Path } from '../utils';

export default {
  props: {
    rootDir: {
      type: String,
      required: true,
    }
  },
  data: () => ({
    dirs: [],
    files: [],
  }),
  watch: {
    rootDir: function() {
      this.dirs = [];
      this.$http.get('/fs', { data: { path: '/' + this.rootDir }})
        .then(({ data }) => this.files = data);
    },
  },
  mounted() {
    this.$http.get('/fs', { data: { path: '/' + this.rootDir }})
      .then(({ data }) => this.files = data);
  },
  methods: {
    enterFolder(folderName) {
      this.dirs.push(folderName);
      const targetPath = '/' + this.rootDir + list2Path(this.dirs);
      this.$http.get('/fs', { data: { path: targetPath }})
        .then(({ data }) => this.files = data);
    },
    handleClick(e) {
      console.log(e);
    },
    handleDirClick(index) {
      console.log(this.dirs[index]);
    }
  },
  
  components: {
    File,
    Folder,
  }
}
</script>
