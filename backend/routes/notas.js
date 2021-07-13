const { Router } = require('express');
const router = Router();

const Nota = require('../models/Nota');

router.get('/', async (req, res) => {
    const notas = await Nota.find();
    res.json(notas);
});

module.exports = router;

// {}