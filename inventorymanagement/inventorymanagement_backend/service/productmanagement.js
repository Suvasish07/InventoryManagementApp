const express =require('express');
const router = express.Router();
var mongoose = require('mongoose');
const https = require('https');


require("./productmodel");
const Product = mongoose.model("Product")
//db connections
mongoose.connect("mongodb://product:product123@ds133086.mlab.com:33086/productservice",()=>{
    console.log("Connected to Db Successfully")
})

var id=0
//Product psot  call
router.post('/Products',(req,res,next)=>{
   
    var newProduct={
        name:req.body.name,
        price:req.body.price,
        rating:req.body.rating,
        id:id
    };
    id++;
    var product = new Product(newProduct)
    product.save().then(()=>{
        Product.find().then((results)=>{
            if(results){
                res.json({"data":results})
            }else{
                res.status({"data":[]})
            }
        }).catch(err=>{
            if(err){
                throw err
            }
        })
    }).catch((err)=>{
      if(err){
          throw err;
      }
  })


})


//get all product:
router.get('/Products',(req,res)=>{
    Product.find().then((results)=>{
        if(results){
            res.json({"data":results})
        }else{
            res.status({"data":[]})
        }
    }).catch(err=>{
        if(err){
            throw err
        }
    })
})

//get a single product from db
router.get("/Products/:id",(req,res)=>{
    Product.findById(req.params.id).then((results)=>{
        if(results){
            res.json({"data":results})
        }else{
            res.sendStatus(404)
        }
    }).catch(err=>{
        if(err){
            throw err;
        }
    })
})

//delete a product from db
router.get("/deleteProduct/:id",(req,res)=>{
    Product.findByIdAndRemove(req.params.id).then((results)=>{
      res.json({"msg":"deleted successfully"})
    }).catch(err=>{
        if(err){
            throw err;
        }
    })
})

//update a product 
router.post("/updateProducts/:id",(req,res,next)=>{
    var newProduct={
        name:req.body.name,
        price:req.body.price,
        rating:req.body.rating,
        id:id
    };
      Product.findByIdAndUpdate(req.params.id,{$set:newProduct},{new:true}, (err,doc)=>{
          if(!err){
            Product.find().then((results)=>{
                if(results){
                    res.json({"data":results})
                }else{
                    res.status({"data":[]})
                }
            }).catch(err=>{
                if(err){
                    throw err
                }
            })
          }
          else{
              console.log("error in product update"+JSON.stringify(err,undefined,2));
          }
      })   


})



module.exports = router;