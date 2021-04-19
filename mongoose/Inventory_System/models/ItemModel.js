const mongoose = require('mongoose');

const schema=mongoose.Schema;

const itemSchema=new schema({
    name:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    isSanitized:{
        type:Boolean,
    },
    unit:{
        type:String,
        required:true
    },
    expiryDate:{
        type:Date,
    },
    category:{
        type:String,
        enum:['Grocery','Medical', 'Fruits&Veg', 'Berverages', 'Babycare', 'Cleaning']
    },
    location:{
        type:String,
        enum:['Store','Kitchen']
    }

})

itemSchema.pre('print',function(){
    console.log('mongodb document created pre hook');
});

const ItemModel=mongoose.model('Item',itemSchema);

module.exports={
    ItemModel
}
