const { Schema, model } = require('mongoose');

const NotaSchema = new Schema({
    isbn: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imagePath: { type: String },
    text: { type: String, required: true },
    author: { type: String, required: false },
    create_at: { type: Date, default: Date.now },
    categoria: [{ type: Schema.Types.ObjectId, refs: 'Categoria' }],
});

module.exports = model('Nota', NotaSchema);


