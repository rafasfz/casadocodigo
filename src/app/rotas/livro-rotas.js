const LivroDao = require('../infra/livro-dao');
const db = require('../../config/database');

const LivroControlador = require('../controladores/livro-controlador')
const livroControlador = new LivroControlador()

const Livro = require('../modelos/livro')

module.exports = (app) => {
    const rotasLivro = LivroControlador.rotas();
    
    app.get(rotasLivro.lista, livroControlador.lista());

    app.route(rotasLivro.cadastro)
        .get(livroControlador.formularioCadastro())
        .post(Livro.validacoes(), livroControlador.cadastra())
        .put(Livro.validacoes(), livroControlador.edita());

    app.get(rotasLivro.edicao, livroControlador.formularioEdita());

    app.delete(rotasLivro.delecao, livroControlador.remove());
};