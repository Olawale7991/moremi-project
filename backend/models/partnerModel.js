import mongoose from "mongoose";

const partnerSchema = mongoose.Schema({
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

    country : {
        type : String,
    },

    companyName : {
        type : String,
        required : true,
    },

    state : {
        type : String,
    },

    role : {
        type : String,
        required : true,
    },

    message : {
        type : String,
    }
})

const partnerModel = mongoose.models.partner || mongoose.model('partner', partnerSchema)

export default partnerModel