const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required:true,
    },
    url: {
        type: String,
        required: true,
    },
    // Data de criação de cada produto
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate)

// Código para resgistrar um model na aplicação
mongoose.model('Product', ProductSchema);
