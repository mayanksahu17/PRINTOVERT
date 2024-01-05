import mongoose ,{Schema} from 'mongoose';


const productSchema = new Schema(
{
    name: {type: String, required: true, unique: true},

    image: {type: String, required: true},

    color: {type: String, required: true},

    brand: {type: String, },

    category: {type: String, required: true},

    description: {type: String, required: true},

    price: {type: Number, required: true},

    stock: {type: Number,},
    
    rating: {type: Number, },
    
    shipped: {type: Boolean,},
    
    delivered: {type: Boolean, },

    ordered : {type : Boolean}
},
{
    timestamps: true,
}
);


const Product = mongoose.model("Product", productSchema);

export default Product;