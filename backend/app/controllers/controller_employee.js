const multer        = require("multer") 
const fs            = require("fs");
const Employee      = require("../models/model_employee")

// For Pagination
const getPagination = (page, size) => {
  const limit = size ? + size : 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

// Create and Save a new Tutorial
exports.create = (req, res) => {

  var employee_image = req.file ? req.file.filename : ""

  let data = new Employee ({
    employee_name       : req.body.employee_name,
    employee_email      : req.body.employee_email,
    employee_tel        : req.body.employee_tel,
    employee_department : req.body.employee_department,
    employee_address    : req.body.employee_address,
    employee_image      : employee_image,
    published           : true
  })
  Employee.saveEmployee(data, (err)=>{
      if (err) console.log(err)
      res.status(200).send(data)
      console.log (req.body)
  })

};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
  // limit คือ จำนวนที่แสดง 
  // sort คือ การเรียงข้อมูล
  Employee.find().limit(2).sort("_id").exec((err,doc)=>{
    res.send(doc)
  })

};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  //console.log (res)
  const id        = req.params.id;
  const proxyHost = req.headers["x-forwarded-host"]
  const host      = proxyHost ? proxyHost : req.headers.host

  Employee.findOne({_id:id}).exec((err, doc) => {
    
    var image = doc.employee_image != "" ? host + "/assets/img/employees/" + doc.employee_image : ""
    var data = {
      "data"  : doc,
      "image" : image
    }
    res.send( JSON.stringify(data) )
  })
  
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {

  if (req.file != null) {

    var employee_image = req.file.filename
    var path = "./app/public/assets/img/employees/" + req.body.employee_image
    // Delete Old File
    if (req.body.employee_image != "" && fs.existsSync(path)) {
        fs.unlinkSync("./app/public/assets/img/employees/" + req.body.employee_image)
    }
      
  }
  else {
    var employee_image = req.body.employee_image
  }

  let data = {
    employee_name       : req.body.employee_name,
    employee_email      : req.body.employee_email,
    employee_tel        : req.body.employee_tel,
    employee_department : req.body.employee_department,
    employee_address    : req.body.employee_address,
    employee_image      : employee_image,
  }
  
  Employee.findByIdAndUpdate(req.params.id, data, {userFindAndModify:false}).exec((err, doc) =>{
    res.send(doc)
    console.log (req.body)
  })
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
  const id = req.params.id;

  Employee.findOne({_id:id}).exec((err, delete_file) => {
    if (delete_file.employee_image != "") { 
      fs.unlinkSync("./app/public/assets/img/employees/" + delete_file.employee_image)
    }
  })

  Employee.findByIdAndDelete(id, {userFindAndModify:false}).exec(err=>{
      if(err) this.console.log(err)
      res.send("Delete Complete")
  })

};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};