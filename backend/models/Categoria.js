const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const CategoriaSchema = new Schema({
    _id: Schema.Types.ObjectId,
});

module.exports = model('Categoria', CategiriaSchema);


// {}