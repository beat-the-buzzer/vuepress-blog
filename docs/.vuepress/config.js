module.exports = {
  // 页面标题
  title: '前端学习',
  // 网页描述
  description: 'welcome to my site !',
  base: '/vuepress-blog/',
  head: [
    // 页面icon
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  // 端口号
  port: 3000,
  markdown: {
    // 代码块行号
    lineNumbers: true
  },
  themeConfig: {
    // 最后更新时间
    lastUpdated: '最后更新时间',
    // 所有页面自动生成侧边栏
    sidebar: 'auto',
    // 仓库地址
    repo: 'https://github.com/beat-the-buzzer/vuepress-blog',
    // 仓库链接label
    repoLabel: 'Github',
    // 编辑链接
    editLinks: true,
    // 编辑链接label
    editLinkText: '编辑此页',
    // 导航
    nav: [
      { text: '直面JavaScript中的30个疑难杂症',link: '/interview/'},
      { text: '前端问题汇总', items: [
        { text: '移动端', link: '/problems/h5'}, 
        { text: 'PC端', link: '/problems/pc'},
        { text: '其他', link: '/problems/other'}
      ]
    },
      { text: 'JavaScript书籍', items: [
          { text: '你不知道的JavaScript(上)', link: '/books/你不知道的javascript上'}, 
          { text: '你不知道的JavaScript(中)', link: '/books/你不知道的javascript中'},
          { text: '你不知道的JavaScript(下)', link: '/books/你不知道的javascript下'}
        ]
      },
      { text: '数据结构和算法', link: '/algorithm/'},
      { text: 'Vue.js', link: '/vue/'},
      { text: '前端工程化',link: '/webpack/'},
      { text: 'VuePress',link: '/vuepress/'},
      { text: '基础配置功能',link: '/common/'}
  ]},
  configureWebpack: {
    resolve: {
      // 静态资源的别名
      alias: {
        '@vuepress': '../images/vuepress',
        '@vue': '../images/vue'
      }
    }
  }
}