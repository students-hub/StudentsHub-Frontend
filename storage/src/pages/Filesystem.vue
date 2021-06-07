<template>
  <div id="filesystem" v-contextMenu="menuObj">
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

    <el-dialog
      title="上传文件" 
      :width="'35%'"
      :visible.sync="uploadFormVisiable"
    >
      <el-upload
        drag
        class="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="uploadFormVisiable = false">取 消</el-button>
        <el-button type="primary" @click="uploadFormVisiable = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
  #filesystem {
    width: 100%;
    height: 100%;
  }

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

  .upload {
    width: 350px;
    margin: 0 auto;
  }
</style>

<script>
import File from '../components/File.vue';
import Folder from '../components/Folder.vue';

import { list2Path } from '../utils/array';
import { setFileList } from '../services/fs';

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
    uploadFormVisiable: false,
  }),
  computed: {
    menuObj() {
      return [{
        title: '上传文件',
        handler: () => {
          this.uploadFormVisiable = true;
        },
      }, {
        title: '新建文件夹',
        handler: () => {
          this.$prompt('请输入文件夹名', '新建文件夹', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            this.$message({
              type: 'success',
              message: "新建文件夹成功"
            });
            console.log(value);
          }).catch(() => {});
        },
      }, {
        title: '刷新',
        handler: () => console.log('刷新'),
      }]
    }
  },
  watch: {
    rootDir: function() {
      this.dirs = [];
      setFileList.call(this, '/' + this.rootDir);
    },
  },
  mounted: function() {
    setFileList.call(this, '/' + this.rootDir);
  },
  methods: {
    enterFolder(folderName) {
      this.dirs.push(folderName);
      const targetPath = '/' + this.rootDir + list2Path(this.dirs);
      setFileList.call(this, targetPath);
    },
    handleClick() {
      setFileList.call(this, '/' + this.rootDir);
      this.dirs = [];
    },
    handleDirClick(index) {
      this.dirs = this.dirs.slice(0, index + 1);
      const targetPath = '/' + this.rootDir + list2Path(this.dirs);
      setFileList.call(this, targetPath);
    }
  },
  
  components: {
    File,
    Folder,
  }
}
</script>
