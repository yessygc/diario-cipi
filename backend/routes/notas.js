const { Router } = require('express');
const Nota = require('../models/Nota');
const router = Router();

const Note = require('../models/Nota');

router.get('/', async (req, res) => {
    const notas = await Note.find();
    res.json(notas);
});

router.post('/', async (req, res) => {
    const { title, description, text, author, isbn }= req.body;
    const newNote = new Note({title, description, text, author, isbn})
    await newNote.save();
    res.json({message: 'Nota guardada'});
});

router.delete('/:id', async (req, res) => {
    console.log(req.params.id)
    const note = await Note.findByIdAndDelete(req.params.id);
    console.log(note);
    res.json({message: 'Nota eliminda'});
})

module.exports = router;

// {}