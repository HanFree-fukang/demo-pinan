const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            {
              "postcss-pxtorem": {
                "rootValue": 37.5, // 设计稿宽度的1/10
                "propList": ["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
              }
            },
          ],
        },
      }
    }
  }
})
