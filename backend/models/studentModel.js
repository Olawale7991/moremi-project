import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    firstName: {
        type : String,
        required : true,

    },

    lastName: {
        type: String,
        required : true,
    },

    phoneNumber : {
        type : Number,
        required : true,
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },

    password : {
        type : String,
        required : true,
    },

    message : {
        type : String,
    }
})

const studentModel = mongoose.models.student || mongoose.model('student', studentSchema)

export default studentModel