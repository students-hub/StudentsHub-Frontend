import axios from 'axios';

export default axios.create({
  baseURL: '',
  timeout: 10000,
});

export function setFileList(path) {
  this.$http.get('/fs', { data: { path }})
    .then(({ data }) => this.files = data);
}