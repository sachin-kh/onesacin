import * as mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type : String, 
        required : true,
    },
    price: {
        type : String, 
        required : true,
    },
    description: {
        type : String, 
        required : true,
    },

})

export {ProductSchema};