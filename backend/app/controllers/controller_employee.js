const multer        = require("multer") 
const fs            = require("fs");
const Employee      = require("../models/model_employee")

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
  
  Employee.find().exec((err,doc)=>{
    res.send(doc)
  })

};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
  const id = req.params.id;

  Employee.findOne({_id:id}).exec((err, doc) => {
    //res.render("admin", doc)
    res.send(doc)
  })
  
};
// Into edit page with an id
exports.edit = (req, res) => {

  Employee.findOne({_id:req.body.employee_id}).exec((err, doc) => {
    res.send(doc)
  })
  
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
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