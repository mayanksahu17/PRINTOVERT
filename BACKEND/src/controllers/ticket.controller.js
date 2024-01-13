
import {ApiError} from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js' 
import {asyncHandler } from '../utils/asyncHandler.js'
import { User } from "../models/user.model.js";

const createTicket = asyncHandler(async (req, res) => {
    try {
      const userId = req.params.id; // Assuming the user ID is passed in the URL
  
      // Fetch the user by ID
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const { subject, image, status, callBackNumber, response, category, description } = req.body;
  
      // Create a new ticket
      const newTicket = new Ticket({
        subject,
        image,
        status,
        callBackNumber,
        response,
        category,
        description
      });
  
      // Save the new ticket
      await newTicket.save();
  
      // Add the newly created ticket to the user's Ticket array
      user.Ticket.push(newTicket);
      await user.save();
  
      return res.status(201).json({ success: true, data: newTicket });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  


  const raiseTicket  = asyncHandler(async (req,res)=>{
    const {email , subject , status, response } = req.body 
    if(!subject && !status && !response){
    throw new ApiError(404 , "User Must have response or status ,subject")
   }
    const user = await User.findOne({email })
  
  user.Ticket.push(req.body)
   await user.save()
  
  return res
  .status(200)
  .json(new ApiResponse(200, user.orders , "Ticket added Succesfully"))
  
  }) 


  
const getAllUserTickets = asyncHandler(async (req, res) => {
    try {
      const userId = req.params.id; // Assuming the user ID is passed in the URL
  
      // Find the user by ID
      const user = await User.findById(userId).populate('Ticket'); // Assuming 'Ticket' is the ref field
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const userTickets = user.Ticket; // Assuming 'Ticket' is the array of ticket references in the user schema
  
      // Fetch all tickets associated with the user
      const tickets = await Ticket.find({ _id: { $in: userTickets } });
  
      new ApiResponse(200, { success: true, data: tickets }, "User Ticket Fetched Succesfully")
  
      return res.status(200).json( new ApiResponse(200, { success: true, data: tickets }, "User Ticket Fetched Succesfully"));
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
 
 
 
  });

  
export {
    raiseTicket,
    createTicket,
    getAllUserTickets
}
