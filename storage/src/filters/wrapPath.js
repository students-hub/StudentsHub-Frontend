import Vue from 'vue';

Vue.filter('wrapPath', (path) => {
  if (!path) return
  return path.length > 10? path.slice(0, 8) + '...' : path;
});