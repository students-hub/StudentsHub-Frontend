<template>
  <div 
    id="folder"
    @click="handleClick"
    @contextmenu="handleContextMenu"
    v-contextMenu="menuObj"
  >
    <img src="~@/assets/folder.png">
    <span>{{ folderName }}</span>
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

  span:hover {
    color: blue;
    text-decoration: underline;
  }

  span {
    margin-top: 20px;
  }
</style>

<script>
export default {
  props: {
    folderName: {
      type: String,
      required: true,
    }
  },
  data: () => ({
  }),
  computed: {
    menuObj() {
      return [{
        title: '打开',
        handler: () => console.log('打开'),
      }, {
        title: '下载',
        handler: () => console.log('下载文件'),
      }, {
        title: '另存为',
        handler: () => console.log('另存为'),
      }, {
        title: '删除',
        handler: () => console.log(this.folderName),
      }, {
        title: '重命名',
        handler: () => {
          this.$prompt('请输入文件名', '重命名', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then(({ value }) => {
            this.$message({
              type: 'success',
              message: "文件名修改成功"
            });
            this.fileName = value;
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
    }
  }
}
</script>
