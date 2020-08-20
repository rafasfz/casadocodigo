const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

const BaseControlador = require('../controladores/base-controlador')
const baseControlador = new BaseControlador()


module.exports = (app) => {
    const rotasBase = BaseControlador.rotas();

    app.get(rotasBase.home, baseControlador.home());
    
};