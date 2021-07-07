const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => res.json({text: 'Hola Mundo'}));

module.exports = router;
// {}