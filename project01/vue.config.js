const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// module.exports = {
//   devServer: {
//     proxy: {
//       '/oauth': {
//         target: 'https://kauth.kakao.com',
//         changeOrigin: true,
//         pathRewrite: { '^/oauth': '' },
//       },
//     },
//   },
// };
