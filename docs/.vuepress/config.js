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
  ga: 'UA-152887516-1',
  themeConfig: {
    /* sidebar: 'auto', */
    sidebar: {
      '/leetcode/': [
        {
          title: '简单',
          collapsable: false,
          children: leetcode.simple
        },
        {
          title: '中等',
          collapsable: false,
          children: leetcode.medium
        },
        {
          title: '困难',
          collapsable: false,
          children: leetcode.difficulty
        }
      ],
      '/react/': react,
      '/htmlcss/': htmlcss,
      '/javascript/': javascript
    },
    nav: [
      { text: '前端词汇', link: '/compre/word/' },
      { text: 'LeetCode', link: '/leetcode/' },
      { 
        text: '代码片段', 
        items: [
          { text: 'Html、Css', link: '/htmlcss/' },
          { text: 'Javascript', link: '/javascript/' },
          { text: 'React', link: '/react/' },
          { text: 'Vue', link: '/vue/' }
        ]
      },
      { text: 'Github', link: 'https://github.com/nieyafei/fe-blog' },
    ],
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: '上次更新' // 文档更新时间：每个文件git最后提交的时间
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
  },
  plugins: {
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
      'ga': "UA-152887516-1"
    }
  }
}

/* 
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-152887516-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-152887516-1');
</script>
*/