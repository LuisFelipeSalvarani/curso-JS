exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.sned('Ei, sou sua nova rota de POST.');
};