<template>
  <div class="file" @click="onClick"  v-right-click:[{id:19,bookid:1024}]="rightMenuObj">
    <img src="~@/assets/file.png">
    <span>{{ fileName }}</span>
  </div>
</template>

<style scoped>
  .file {
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
    fileName: {
      type: String,
      required: true
    }
  },
  data: () => ({}),
  computed: {
    rightMenuObj() {
      // 右键菜单对象，菜单内容和处理事件
      const obj = {
        this: this,
        text: [
          "查看资料",
          { content: "复制用户id", status: true },
          "移除该会话",
          "在联系人中查看",
          "在单聊窗口中打开",
          "会话置顶"
        ],
        handler: {
          checkingData(parameter) {
            console.log(parameter);
            console.log("查看资料点击事件");
          },
          copyId() {
            console.log("复制用户id点击事件");
          },
          removeItem() {
            console.log("移除会话点击事件");
          },
          showContact() {
            console.log("在联系人中查看");
          },
          showSingleChat() {
            console.log("在单聊窗口中打开");
          },
          topConversation() {
            console.log("会话置顶");
          }
        }
      };
      return obj;
    }
  },
  methods: {
    onClick() {
      console.log("click file");
    }
  }
}
</script>
