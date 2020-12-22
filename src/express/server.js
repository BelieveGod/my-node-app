let express = require('express');    //引入express模块
let fs = require('fs');

let app = express();                //实例化express

/**
 * 配置test.action路由
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */
app.all('/gs-robot/data/maps', function(req, res) {
    // let content=fs.readFileSync('src/express/mapList.json');
    let content = require('./mapList.json');
    res.send(content);
    // res.json(content);
});

app.all('/gs-robot/data/graph_paths', function(req, res) {
    // let content=fs.readFileSync('src/express/graphPath.json');
    let content = require('./graphPath.json');
    // res.send('hello world');
    res.json(content);
});

app.all('/gs-robot/data/map_png', function(req, res) {
    let content=fs.readFileSync('src/express/map.png');
    // let content = require('./graphPath.json');
    // res.json(content);
    res.writeHead(200,{'Content-Type':'image/png'});
    res.end(content);
});

/*为app添加中间件处理跨域请求*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

/**
 * 监听8090端口
 */
app.listen('9999');