module.exports = {
    title: '胖茶的博客',
    description: '我什么事都没忘 只是有些事适合收藏',
    base: 'myBlog', // 服务器部署路径（非根URL时）
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            '/',
            '/test',
            '/es5',
            ['/page-b', 'Explicit link text']
          ]
    },
    // webpack配置
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': ''
            }
        }
    }
}