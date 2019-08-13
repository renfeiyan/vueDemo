var express = require('express');
var app = express();
var fs = require("fs");
var url = require("url");
var cors = require('cors');


app.use(express.static('src'))

app.get("/getAll",function(req,res){
    fs.readFile("./todos.json",function(err,data){
        res.json({"result":JSON.parse(data.toString()).result});
    });
})

//添加,先读后写
app.get("/add",function(req,res){
    var title = url.parse(req.url,true).query.title;
    fs.readFile("./todos.json",function(err,data){
        var arr = JSON.parse(data.toString()).result;
        arr.push ({"id":arr.length,"title":title,"done":false});
        fs.writeFile("./todos.json",JSON.stringify({"result":arr}),function(err,data){
            res.send("添加成功");
        });
    });
})
//修改done
app.get("/changeDone",function(req,res){
    var id = url.parse(req.url,true).query.id;
    var done = url.parse(req.url,true).query.done == 1 ? true : false;
    //先读取后写
    fs.readFile("./todos.json",function(err,data){
        var arr = JSON.parse(data.toString()).result;
        arr = arr.map((item)=>{
            if(item.id == id){
                item.done = done;
            }
            return item;
        });
        fs.writeFile("./todos.json",JSON.stringify({"result":arr}),function(err,data){
            res.send("修改成功");
        })
    })
})

//修改title
app.get("/changeTitle",function(req,res){
    var id = url.parse(req.url,true).query.id;
    var title = url.parse(req.url,true).query.title;
    //先读取后写
    fs.readFile("./todos.json",function(err,data){
        var arr = JSON.parse(data.toString()).result;
        arr = arr.map((item)=>{
            if(item.id == id){
                item.title = title;
            }
            return item;
        });
        fs.writeFile("./todos.json",JSON.stringify({"result":arr}),function(err,data){
            res.send("修改成功");
        })
    })
})

//删除
app.get("/del",function(req,res){
    var id = url.parse(req.url,true).query.id;
    
    //先读取后写
    fs.readFile("./todos.json",function(err,data){
        var arr = JSON.parse(data.toString()).result;
        arr = arr.filter((item)=>{
            return item.id != id;
        });
        fs.writeFile("./todos.json",JSON.stringify({"result":arr}),function(err,data){
            res.send("删除成功");
        })
    })
})

//使用 JSON.parse() 方法将数据转换为 JavaScript 对象。

var server = app.listen(3000,function(){
    console.log("运行在了3000端口");
})