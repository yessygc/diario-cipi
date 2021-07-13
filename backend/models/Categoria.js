const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CategoriaSchema = new Schema({
    _id: Mongoose.Schema.ObjectId,
    name: { type: String, required: true },
});

module.exports = model('Categoria', CategoriaSchema);


// {}