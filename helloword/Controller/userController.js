// const { log } = require('console');
const fs = require('fs');
// const http = require('http');
const path = require("path");

//获取列表
const getCarList = (req, res) => {
    fs.readFile(path.join(__dirname, "datacar", "data.json"), "utf-8", (err, data) => {
        if(err){
            res.end(500)
        }else{
            res.end(data)
        }
        
    });
};
//删除
const deleCar = (req, res) => {
    const id = req.url.split('?')[1].split('=')[1];
    console.log(id);
    let data =JSON.parse(carList()) 
    let index = data.list.findIndex((item) => item.id == id)
    if (index === -1) {
      res.statusCode = 200;
      res.end(JSON.stringify({ msg: "未找到数据" }));
      return;
    }
    data.list.splice(index, 1);
    let dataStr = JSON.stringify(data);
    console.log(dataStr);
    fs.writeFile(path.join(__dirname,"datacar", "data.json"), dataStr, (err) => {
      if (err != null) {
        res.statusCode = 404;
        res.end("删除失败");
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify({ msg: "删除成功" }));
      }
    });
  };
  const addCar =(req,res)=>{
   let newCar = req.body
        fs.readFile(path.join(__dirname,"datacar", "data.json"), 'utf-8', function(err, data) {
          if (err) {
            res.statusCode = 500;
            res.end("读取文件失败");
          } else {
            let cars = JSON.parse(data);
            console.log(cars);
            cars.list.push(newCar);
            fs.writeFile(path.join(__dirname,"datacar", "data.json"), JSON.stringify(cars), 'utf-8', function(err) {
              if (err) {
                res.statusCode = 500;
                res.end("写入文件失败");
              } else {
                res.statusCode = 200;
                res.end("添加汽车成功");
              }
            });
          }
        });
  }
  function carList() {
   let data = fs.readFileSync(path.join(__dirname,"datacar", 'data.json'), 'utf-8')
    return data;
  }
module.exports = {
    getCarList,
    deleCar,
    addCar,
};