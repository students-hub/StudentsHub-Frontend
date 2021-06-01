<template>
  <div class="folder" @click="onClick">
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
  methods: {
    onClick() {
      console.log("click folder");
    }
  }
}
</script>
