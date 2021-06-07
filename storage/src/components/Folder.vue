<template>
  <div 
    id="folder"
    @click="handleClick"
    @contextmenu="handleContextMenu"
    v-contextMenu="menuObj"
  >
    <div class="wrapper">
      <img src="~@/assets/folder.png">
      <span class="icons">
        <span>
          <i 
            class="el-icon-zoom-in icon"
            @click="handleZoomInFolder"
          ></i>
        </span>
        <span>
          <i 
            class="el-icon-delete icon"
            @click="handleDelelteFolder"
          ></i>
        </span>
      </span>
    </div>
    <span class="foldername">{{ folderName }}</span>
  </div>
</template>

<style scoped>
  #folder {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 150px;
    height: 150px;
  }

  img:hover, span:hover {
    cursor: pointer;
  }

  .wrapper {
    position: relative;
  }

  .foldername:hover {
    color: #409EFF;
    text-decoration: underline;
  }

  .foldername {
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
import { deleteFolder, renameFolder } from '../services/fs';

export default {
  props: {
    folderName: {
      type: String,
      required: true,
    },
    parentDir: {
      type: String,
      required: true,
    }
  },
  data: () => ({
  }),
  computed: {
    fullPath() {
      return this.parentDir + this.folderName;
    },
    menuObj() {
      return [{
        title: '打开',
        handler: () => this.$emit('enterFolder', this.folderName),
      }, {
        title: '删除',
        handler: () => {
          deleteFolder.call(this, 'go-api-proj', this.fullPath);
          this.$emit('refresh');
        },
      }, {
        title: '重命名',
        handler: () => {
          this.$prompt('请输入文件夹名', '重命名', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            renameFolder.call(
              this,
              'go-api-proj', 
              this.fullPath + '/',
              this.parentDir + value + '/'
            );
            this.$emit('refresh');
            this.$message({
              type: 'success',
              message: "文件名修改成功"
            });
          }).catch(() => {});
        },
      }, {
        title: '属性',
        handler: () => console.log('属性'),
      }]
    }
  },
  methods: {
    handleClick(e) {
      e.stopPropagation();
      this.$emit('enterFolder', this.folderName);
    },
    handleContextMenu(e) {
      e.stopPropagation();
    },
    handleZoomInFolder(e) {
      e.stopPropagation();
      this.$emit('enterFolder', this.folderName);
    },
    handleDelelteFolder(e) {
      e.stopPropagation()
      deleteFolder.call(this, 'go-api-proj', this.fullPath);
      this.$emit('refresh');
    }
  }
}
</script>
