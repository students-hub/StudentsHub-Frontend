<template>
  <div 
    class="folder"
    @click="handleClick"
    v-right-click:[{id:19,bookid:1024}]="rightMenuObj">
    <img src="~@/assets/folder.png">
    <span>{{ folderName }}</span>
  </div>
</template>

<style scoped>
  .folder {
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
  data: () => ({}),
  computed: {
    rightMenuObj() {
      // 右键菜单对象，菜单内容和处理事件
      const obj = {
        this: this,
        text: [
          "打开",
          "下载",
          "另存为",
          "删除",
          "重命名",
          "属性",
        ],
        handler: {
          handleOpen: () => {
            console.log("打开文件");
          },
          handleDownload: (parameter) => {
            console.log(parameter);
            console.log("下载文件");
          },
          handleSaveAs: () => {
            console.log("保存文件");
          },
          handleDelete: () => {
            console.log("删除文件");
          },
          handleRename: () => {
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
          handleProperty: () => {
            console.log("显示属性");
          }
        }
      };
      return obj;
    },
  },
  methods: {
    handleClick() {
      this.$emit('enterFolder', this.folderName);
    }
  }
}
</script>
