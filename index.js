//导入express
let express = require('express');

//创建express实例
let app = express();

//设置public文件目录
app.use(express.static('public'));

//监听端口
app.listen(8081, () => {console.log('the server running at http://127.0.0.1:8081');})