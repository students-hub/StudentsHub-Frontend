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
          v-else
          class="file"
          :file-name="file.name"
          :parentDir="fullPath"
          :type="file.type"
          @refresh='refreshFolder'
        />
      </div>
      <div class="uploadArea" @click="uploadFormVisiable=true">
        <i class="el-icon-plus avatar-uploader-icon"></i>
      </div>
    </div>

    <el-dialog
      title="上传文件" 
      :width="'35%'"
      :visible.sync="uploadFormVisiable"
    >
      <el-upload
        drag
        action=""
        class="upload"
        multiple
        :on-change="handleFileChange"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <div slot="footer" class="dialog-footer">
        <el-button @click="uploadFormVisiable = false">取 消</el-button>
        <el-button type="primary" @click="handleSubmit">确 定</el-button>
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

  .folder, .file, .uploadArea{
    margin: 30px;
    margin-right: 75px;
  }

  .upload {
    width: 350px;
    margin: 0 auto;
  }

  .uploadArea {
    width: 160px;
    height: 170px;

    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
  }
  .uploadArea:hover {
    border-color: #409EFF;
  }
  .uploadArea > i {
    font-size: 28px;
    color: #8c939d;
    width: 160px;
    height: 170px;
    line-height: 170px;
    text-align: center;
  }
</style>

<script>
import File from '../components/File.vue';
import Folder from '../components/Folder.vue';

import { list2Path } from '../utils/array';
import { setFileList, uploadFile } from '../services/fs';

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
    upLoadFile: null,
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
    },
    fullPath() {
      let result = this.rootDir + '/';
      this.dirs.forEach(path => {
        result += (path + '/');
      });
      return result;
    }
  },
  watch: {
    rootDir: function() {
      this.dirs = [];
      setFileList.call(this, this.rootDir + '/');
    },
  },
  mounted: function() {
    setFileList.call(this, this.rootDir + '/');
  },
  methods: {
    enterFolder(folderName) {
      this.dirs.push(folderName);
      const targetPath = this.rootDir + list2Path(this.dirs) + '/';
      setFileList.call(this, targetPath);
    },
    handleClick() {
      setFileList.call(this, this.rootDir + '/');
      this.dirs = [];
    },
    handleDirClick(index) {
      this.dirs = this.dirs.slice(0, index + 1);
      const targetPath = this.rootDir + list2Path(this.dirs) + '/';
      setFileList.call(this, targetPath);
    },
    handleFileChange(file) {
      console.log(file.raw);
      this.upLoadFile = file.raw;
    },
    handleSubmit() {
      this.uploadFormVisiable = false;
      uploadFile.call(this, 'go-api-proj', this.upLoadFile, this.fullPath);
      this.refreshFolder();
    },
    refreshFolder() {
      setTimeout(() => {
        setFileList.call(this, this.rootDir + '/');
      }, 300);
     // this.$forceUpdate();
    }
  },
  
  components: {
    File,
    Folder,
  }
}
</script>
