const { defineConfig } = require('@vue/cli-service');
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
};
