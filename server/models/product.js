import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0.0,
        required: true
    },
    description: String,
    images: [String],
}, {timestamps: true})

const Product = mongoose.model('Product', productSchema)

export default Product