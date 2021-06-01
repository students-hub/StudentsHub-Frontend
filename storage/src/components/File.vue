<template>
  <div class="file" @click="onClick">
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
  methods: {
    onClick() {
      console.log("click file");
    }
  }
}
</script>
