const database_config       = require("../config/db.config.js")
const mongoose              = require("mongoose")
const mongoosePaginate      = require("mongoose-paginate-v2")
mongoose.Promise            = global.Promise;

const database              = {}
database.mongoose           = mongoose
database.url                = database_config.url
database.employee           = require("./model_employee.js") (mongoose, mongoosePaginate)
database.department         = require("./model_department.js") (mongoose, mongoosePaginate)
database.product_type       = require("./model_product_type.js") (mongoose, mongoosePaginate)
database.product_attribute  = require("./model_product_attribute.js") (mongoose, mongoosePaginate)
module.exports              = database;

// สร้างฐานข้อมูล
mongoose.connect(database.url, {
    
    useNewUrlParser: true, 
    useUnifiedTopology: true

}).catch(err=>console.log(err))