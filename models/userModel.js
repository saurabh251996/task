const mongoose=require('mongoose')
const DataTypeEnum = ['string', 'number', 'boolean'];
const userSchema= new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    dataType: { type: String, 
        enum: DataTypeEnum, 
        required: true 
    },


    
    
    value: { 
        type: String, 
        required: true 
    },
    source_type: 
    { 
        type: String, 
        required: true 
    },
    source_id: {
         type: Number, 
         required: true 
        }

 
    // updatedAt: DataTypes.DATE,



})


const user=mongoose.model('User',userSchema)
module.exports=user

