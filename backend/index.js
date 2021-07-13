if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

//Inicializaciones
const app = express();
require('./database');

//Configuraciones
app.set('port', process.env.PORT || 3002);

//Middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.use('/api/diario', require('./routes/notas'));

// Documentos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

// {} [] ||