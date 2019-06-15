if (process.env.NODE_ENV == 'development') { //开发环境
    module.exports = {
        title: '黑曼巴云课堂',
        baseUrl: 'http://192.168.1.102:5840/#/' //java项目接口地址
    }
} else if (process.env.NODE_ENV == 'testing') { //测试环境
    module.exports = {
        title: '黑曼巴云课堂',
        baseUrl: 'http://192.168.1.102:5840/#/' //java项目接口地址
    }
} else {
    module.exports = { //默认生产环境
        title: '黑曼巴云课堂',
        baseUrl: 'http://192.168.1.102/api' //java项目接口地址
    }
}
