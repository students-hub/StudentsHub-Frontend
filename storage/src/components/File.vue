<template>
  <div 
    id="file"
    v-contextMenu="menuObj"
  >
    <img v-if="type === 'word'"       src="~@/assets/word.png">
    <img v-else-if="type === 'ppt'"   src="~@/assets/ppt.png">
    <img v-else-if="type === 'excel'" src="~@/assets/excel.png">
    <img v-else-if="type === 'pdf'"   src="~@/assets/pdf.png">
    <img v-else-if="type === 'txt'"   src="~@/assets/txt.png">
    <img v-else-if="type === 'video'" src="~@/assets/video.png">
    <img v-else-if="type === 'audio'" src="~@/assets/audio.png">
    <img v-else-if="type === 'img'"   src="~@/assets/img.png">
    <img v-else src="~@/assets/file.png"> 
    <span>{{ fileName }}</span>
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
    type: {
      type: String,
      required: true
    },
    fileName: {
      type: String,
      required: true
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
  methods: {}
}
</script>
