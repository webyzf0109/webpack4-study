// node写法
let path=require('path');
module.exports={
    mode:'development',//模式 production development
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',//文件名字
        path:path.resolve(__dirname,'dist'),//必须是一个绝对路径
    }
}