const express       = require("express")
const multer        = require("multer") 
const fs            = require("fs");
const Employee      = require("../models/model_employee")
const router        = express.Router()

// Employee insert
router.post("/", (req,res)=>{

    let data = new Employee ({
        employee_name   : req.body.employee_name,
        employee_email  : req.body.employee_email,
        published       : true
    })
    Employee.saveEmployee(data, (err)=>{
        if (err) console.log(err)
        res.status(200).send(data);
    })
})

// Employee Find All
router.get("/", (req,res)=>{
    
    Employee.find().exec((err,doc)=>{
        res.send(doc)
    })

})

// Employee Delete
router.delete("/:employee_id", (req,res)=>{
    
    const employee_id = req.params.employee_id;

    Employee.findByIdAndDelete(employee_id, {userFindAndModify:false}).exec(err=>{
        if(err) this.console.log(err)
        res.send("Delete Complete")
    })

})

module.exports = router