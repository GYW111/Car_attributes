const fs = require('fs');
// const http = require('http');
const path = require("path");

//获取列表
const getCarList = (req, res) => {
  fs.readFile(path.join(__dirname, "datacar", "data.json"), "utf-8", (err, data) => {
    if (err) {
      res.end(500)
    } else {
      res.end(data)
    }
  });
};
//删除
const deleCar = (req, res) => {
  const id = req.url.split('?')[1].split('=')[1];
  console.log(id);
  let data = JSON.parse(carList())
  let index = data.list.findIndex((item) => item.id == id)
  if (index === -1) {
    res.statusCode = 200;
    res.end(JSON.stringify({ msg: "未找到数据" }));
    return;
  }
  data.list.splice(index, 1);
  let dataStr = JSON.stringify(data);
  // console.log(dataStr);
  fs.writeFile(path.join(__dirname, "datacar", "data.json"), dataStr, (err) => {
    if (err != null) {
      res.statusCode = 404;
      res.end("删除失败");
    } else {
      res.statusCode = 200;
      res.end(JSON.stringify({ msg: "删除成功" }));
    }
  });
};
const addCar = (req, res) => {
  let newCar = req.body
  fs.readFile(path.join(__dirname, "datacar", "data.json"), 'utf-8', function (err, data) {
    if (err) {
      res.statusCode = 500;
      res.end("读取文件失败");
    } else {
      let cars = JSON.parse(data);
      // console.log(cars);
      cars.list.push(newCar);
      fs.writeFile(path.join(__dirname, "datacar", "data.json"), JSON.stringify(cars), 'utf-8', function (err) {
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
const detailsCar = (req, res) => {
  const id = req.url.split('?')[1].split('=')[1];
  console.log(id);
  let datadetail = JSON.parse(carList())
  let index = datadetail.list.find((item) => item.id == id)
  if (index === -1) {
    res.statusCode = 200;
    res.end(JSON.stringify({ msg: "未找到数据" }));
    return;
  }
  res.statusCode = 200
  res.end(JSON.stringify(index))
}



//修改
const modifyCar = (req, res) => {
  //接受参数 2个参数 id和修改的数据
  let id = req.query.id
  console.log(id,444);
  let data = req.body;
  console.log(data);
  //获取数据
  let list = getCarData();
  // console.log(list);
  let index = list.findIndex((item) => item.id === id);
  console.log(index);
  if (index == -1) {
    res.json({
      code: 404,
      msg: "未找到数据",
    });
  }
  list[index] = {
    ...list[index],
    ...data,
  };
  wirteDate(list);
  res.json({
    code: 200,
    msg: "ok",
  });
}

const wirteDate =(data)=>{
  fs.writeFileSync(path.join(__dirname,"datacar","data.json"),JSON.stringify({list:data}))
  return
}
const getCarData = (page=1,size)=>{
  let data =fs.readFileSync(path.join(__dirname,"datacar","data.json"),'utf-8')
  data = JSON.parse(data).list
  console.log(data);
  size=size||data.length
  if (page&&size) {
    console.log(data.data);
    data.data = data.slice((page-1)*size,page*size)
  }
  return data
}
// console.log(getCarData());
function carList() {
  let data = fs.readFileSync(path.join(__dirname, "datacar", 'data.json'), 'utf-8')
  return data;
}
module.exports = {
  getCarList,
  deleCar,
  addCar,
  detailsCar,
  modifyCar
};