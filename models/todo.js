import  mongoose from 'mongoose'


var todoSchema= mongoose.Schema({
    title:{
        type:String,
        minLength:[3,"title is less than 3 characters"],
        maxLength:25,
        required:true,
        trim:true

    },
    completed:{
        type:Boolean,
        default:false
    },
    userId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
        required:true
    }
})


var todoModel= mongoose.model('Todo',todoSchema)

export default todoModel