const fs            = require("fs");
const Department    = require("../models").department

// Create and Save a new Tutorial
exports.create = (req, res) => {

  let data = new Department ({
    department_name   : req.body.department_name,
    department_upline : req.body.department_upline,
    dapartment_salary : req.body.dapartment_salary,
  })

  data.save().then(data => {
    res.status(200).send(data)
    console.log (req.body)
  })
  
}
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  

}
// Find a single Tutorial with an id
exports.findOne = (req, res) => {

  
}
// Update a Tutorial by the id in the request
exports.update = (req, res) => {


  
}
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  


}