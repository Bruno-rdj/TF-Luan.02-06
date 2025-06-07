import path from 'path';
import CONSTANTS from '../../../config/constants.js';

export default (request, response, next) => {
    if (!request.files || !request.files.documento) {
        return response.status(CONSTANTS.HTTP.BAD_REQUEST)
            .json({ error: 'Arquivo não enviado' });
    }

    const arquivo = request.files.documento;
    const extensao = path.extname(arquivo.name).toLowerCase();

    // Verificar extensão do arquivo
    if (!CONSTANTS.UPLOAD.ALLOWED_EXTENSIONS.includes(extensao)) {
        return response.status(CONSTANTS.HTTP.BAD_REQUEST)
            .json({ error: 'Apenas arquivos PDF são permitidos' });
    }

    // Verificar tamanho do arquivo
    if (arquivo.size > CONSTANTS.UPLOAD.MAX_FILE_SIZE) {
        return response.status(CONSTANTS.HTTP.BAD_REQUEST)
            .json({ error: `Tamanho máximo permitido é ${Math.floor(CONSTANTS.UPLOAD.MAX_FILE_SIZE / (1024 * 1024))}MB` });
    }

    return next();
}