<template>
  <ul
    id="context-menu"
    :style="{top: top, left: left}"
  >
    <li 
      v-for="(item, index) in items"
      :key="index"
      @click="item.handler"
      @contextmenu.prevent
    >
      {{ item.title }}
    </li>
  </ul>
</template>

<style scoped>
#context-menu {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 175px;
  z-index: 999999;

  background: #FAFAFA;
  border: 1px solid #BDBDBD;
  box-shadow: 
    0 2px 2px 0 rgba(0,0,0,.14),
    0 3px 1px -2px rgba(51, 36, 36, 0.2),
    0 1px 5px 0 rgba(0,0,0,.12);
  list-style: none;
}

li {
  border-bottom: 1px solid #E0E0E0;
  margin: 0;
  padding: 5px 35px;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  cursor: pointer;
  background: #1E88E5;
  color: #FAFAFA;
}
</style>

<script>
export default {
  props: {
    top: {
      type: String,
      required: true,
      default: '0px',
    },
    left: {
      type: String,
      required: true,
      default: '0px',
    },
    items: {
      type: Array,
      required: true,
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
}
</script>
