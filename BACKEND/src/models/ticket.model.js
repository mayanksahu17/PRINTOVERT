import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    subject : {
        type : String,
        required   : true
    },
    image: {
        type: String // Storing a single imageURL for the user
    },
    status : {
        type : String,
        required   : true
    },
    callBackNumber : {
        type : String,
        required   : true
    },
    response : {
        type : String,
    
    },
    category : {
        type : String,
    
    },
    description : {
        type : String,
    
    },
  
  
},{timestamps : true })


export const Ticket = mongoose.model("Ticket" , ticketSchema)