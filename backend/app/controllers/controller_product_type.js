const ProductType    = require("../models").product_type

exports.create = (req, res) => {
  console.log (req.body)
  let data = new ProductType ({
    product_type_name   : req.body.product_type_name,
    product_type_code   : req.body.product_type_code
  })
  
  data.save().then(data => {
    res.status(200).send(data)
  })
  
}

exports.get_all = (req, res) => {
  ProductType.find().exec((err, doc) => {
    res.send(doc)
  })
}

exports.get_one = (req, res) => {

  const id = req.params.id;
  ProductType.find().exec((err, documant_all) => {
    ProductType.findOne({_id:id}).exec((err, doc) => {
    
      res.send({
        product_type       : documant_all,
        product_type_id    : doc._id,
        product_type_name  : doc.product_type_name,
        product_type_code  : doc.product_type_code
      })

    })
  })
  
}

exports.update = (req, res) => {

  let data = {
    product_type_name : req.body.product_type_name,
    product_type_code : req.body.product_type_code
  }

  ProductType.findByIdAndUpdate(req.params.id, data, {userFindAndModify:false}).exec((err, doc) =>{
    res.send(doc)
    console.log (req.body)
  })
}

exports.delete = (req, res) => {

    ProductType.findByIdAndDelete(req.params.id, {userFindAndModify:false}).exec(err=>{
    if(err) this.console.log(err)
    res.send("Delete Complete")
  })

}