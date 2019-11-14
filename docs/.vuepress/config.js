const path = require("path");
const leetcode = require('./config/leetcode')
const react = require('./config/react')
const htmlcss = require('./config/htmlcss')
const javascript = require('./config/javascript')

module.exports = {
  base: '/fe-blog/',
  title: '前端蜗牛',
  description: '一直在路上的前端蜗牛',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    /* sidebar: 'auto', */
    sidebar: {
      '/leetcode/': leetcode,
      '/react/': react,
      '/htmlcss/': htmlcss,
      '/javascript/': javascript
    },
    nav: [
      { text: 'LeetCode', link: '/leetcode/' },
      { 
        text: '代码片段', 
        items: [
          { text: 'Html、Css', link: '/htmlcss/' },
          { text: 'Javascript', link: '/javascript/' },
          { text: 'React', link: '/react/' },
          { text: 'Vue', link: '/leetcode/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/nieyafei/fe-blog' },
    ],
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  },
  postcss: { plugins: [require('autoprefixer')] },
  sass: { indentedSyntax: true },
  scss: {
    includePaths: ["./public/scss/index.scss"]
  },
  stylus: { preferPathResolver: 'webpack' },
  chainWebpack: (config, isServer) => {
    config.resolveLoader
        .modules
        .add(path.resolve(__dirname, './node_modules'))
  }
}
