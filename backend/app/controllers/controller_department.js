const fs            = require("fs");
const Department    = require("../models").department

// Create and Save a new Tutorial
exports.create = (req, res) => {

  let data = new Department ({
    department_name   : req.body.department_name,
    department_upline : req.body.department_upline,
    department_salary : req.body.department_salary
  })
  console.log (data)
  
  data.save().then(data => {
    res.status(200).send(data)
  })
  
}
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Department.find().exec((err, doc) => {
    res.send(doc)
  })
}
// Find a single Tutorial with an id
exports.findOne = (req, res) => {

  const id        = req.params.id;
  Department.find().exec((err, documant_all) => {
    Department.findOne({_id:id}).exec((err, doc) => {
    
      res.send({
        department          : documant_all,
        department_id       : doc._id,
        department_name     : doc.department_name,
        department_upline   : doc.department_upline,
        department_salary   : doc.department_salary
      })

    })
  })
  
}
// Update a Tutorial by the id in the request
exports.update = (req, res) => {


  
}
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

  Department.findByIdAndDelete(req.params.id, {userFindAndModify:false}).exec(err=>{
    if(err) this.console.log(err)
    res.send("Delete Complete")
  })

}