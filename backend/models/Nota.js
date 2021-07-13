const { Schema, model } = require('mongoose');

const NotaSchema = new Schema({
    _id: Schema.Types.ObjectId(),
    title: { type: String, required: true },
    description: { type: String, required: true },
    imagePath: { type: String, required: true },
    text: { type: String, required: true },
    author: { type: String, required: false },
    create_at: { type: Date, default: Date.now },
    categoria: [{ type: Schema.Types.ObjectId, refs: 'Categoria' }],
});

module.exports = model('Nota', NotaSchema);


