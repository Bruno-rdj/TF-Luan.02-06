import path from 'path';
import CONSTANTS from '../../../config/constants.js';

export default (request, response, next) => {
    if (!request.files || !request.files.documento) {
        return response.status(CONSTANTS.HTTP.BAD_REQUEST)
            .json({ error: 'Arquivo não enviado' });
    }

    const arquivo = request.files.documento;
    const extensao = path.extname(arquivo.name).toLowerCase();

    if (extensao !== '.pdf') {
        return response.status(CONSTANTS.HTTP.BAD_REQUEST)
            .json({ error: 'Apenas arquivos PDF são permitidos' });
    }

    return next();
}