module.exports = {
  devServer: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: `storage_vue`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_storage_vue`,
    },
  },
  publicPath: process.env.NODE_ENV == 'production'? '/StudentsHub-Frontend/child/vue/' : '/child/vue/',
  outputDir: 'dist/vue/'
};