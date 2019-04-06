const mongoose=require("mongoose");
//a model => ref to collection
mongoose.model("Product",{

    // Title,author,numberpage,publisher

    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    rating:{
        type:Number,
        require:true
    },
    id:{
        type:Number,
        require:true
    }
})