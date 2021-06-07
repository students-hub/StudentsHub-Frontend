<template>
  <div 
    id="file"
    v-contextMenu="menuObj"
  >
    <div class="wrapper">
      <img v-if="type === 'word'"       src="~@/assets/word.png">
      <img v-else-if="type === 'ppt'"   src="~@/assets/ppt.png">
      <img v-else-if="type === 'excel'" src="~@/assets/excel.png">
      <img v-else-if="type === 'pdf'"   src="~@/assets/pdf.png">
      <img v-else-if="type === 'txt'"   src="~@/assets/txt.png">
      <img v-else-if="type === 'video'" src="~@/assets/video.png">
      <img v-else-if="type === 'audio'" src="~@/assets/audio.png">
      <img v-else-if="type === 'image'" src="~@/assets/img.png">
      <img v-else src="~@/assets/file.png">
      <span class="icons">
        <span>
          <i class="el-icon-zoom-in icon"></i>
        </span>
        <span >
          <i 
            class="el-icon-download icon"
            @click="handleDownloadIconClick"
          ></i>
        </span>
        <span>
          <i class="el-icon-delete icon"></i>
        </span>
      </span>
    </div>
    <span class="filename">{{ fileName | wrapPath }}</span>
  </div>
</template>

<style scoped>
  #file {
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  img {
    width: 150px;
    height: 150px;
  }

  img:hover, .filename:hover {
    cursor: pointer;
  }

  .wrapper {
    position: relative;
  }
  .filename:hover {
    color: #409EFF;
    text-decoration: underline;
  }
  .filename {
    margin-top: 20px;
  }

  .icons {
    opacity: 0;
    background-color: rgba(0,0,0,.5);
    transition: opacity .3s;

    position: absolute;
    top: -10px;
    left: -8px;
    height: 110%;
    width: 110%;
    border-radius: 5%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .icons:hover {
    opacity: 1;
  }

  .icon {
    color: #fff;
    font-size: 1.4em;
  }
  .icon:hover {
    color: #409EFF;
    cursor: pointer;
  }
</style>

<script>
import { getFileAddr, deleteFileByAddr, renameFile } from '../services/fs';

export default {
  props: {
    type: {
      type: String,
      required: true
    },
    parentDir: {
      type: String,
      required: true,
    },
    fileName: {
      type: String,
      required: true
    }
  },
  data: () => ({

  }),
  computed: {
    fullPath() {
      return this.parentDir + this.fileName;
    },
    menuObj() {
      return [{
        title: '下载',
        handler: () => window.open(getFileAddr('go-api-proj', this.fullPath))
      }, {
        title: '另存为',
        handler: () => document.execCommand("SaveAs"),
      }, {
        title: '删除',
        handler: async () => {
          await deleteFileByAddr.call(this, 'go-api-proj', this.fullPath);
          this.$emit('refresh');
        },
      }, {
        title: '重命名',
        handler: () => {
          this.$prompt('请输入文件名', '重命名', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            if (this.fileName !== value) {
              renameFile.call(this, 'go-api-proj', this.fullPath, this.parentDir + value);
              this.$emit('refresh');
              this.$message({
                type: 'success',
                message: "文件名修改成功"
              });
            }
          }).catch(() => {});
        },
      }, {
        title: '属性',
        handler: () => console.log('属性'),
      }]
    }
  },
  methods: {
    handleDownloadIconClick() {
      window.open(getFileAddr('go-api-proj', this.fullPath));
    }
  }
}
</script>
