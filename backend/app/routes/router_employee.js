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

module.exports = router