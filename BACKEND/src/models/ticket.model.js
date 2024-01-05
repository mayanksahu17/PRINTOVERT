import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    subject : {
        type : String,
        required   : true
    },
    status : {
        type : String,
        required   : true
    },
    response : {
        type : String,
        required   : true
    },
  
  
},{timestamps : true })


export const Ticket = mongoose.model("Ticket" , ticketSchema)