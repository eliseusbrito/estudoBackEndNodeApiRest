const repository = require('../repository/videosRepository');

exports.getVideoById = async (id) => {
    let res = {};
    if (!id) throw new HttpError('Não encontrato id', 500);

    await repository.getVideoById(id)
        .then((result) => {
            res = result;
            return res;
        })
        .catch((error) => {
            res.statusCode = 500;
            res.error = error.message || 'Erro ao buscar os atividades';
            return res;
        });

    if (res.error) {
        throw new HttpError(res.error || 'Erro ao buscar os atividades', (res.statusCode || 500));
    }
    return res;
};