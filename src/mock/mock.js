const Mock = require('mockjs')   //引入mockjs
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档

const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            pictures: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            authorName: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
            date: Random.date() //+ ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}

Mock.mock('/news/index','post',produceNewsData);