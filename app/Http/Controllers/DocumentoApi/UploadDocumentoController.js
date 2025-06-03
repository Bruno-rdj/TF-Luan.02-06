import DocumentoModel from "../../../Models/DocumentoModel.js";
import CONSTANTS from "../../../../config/constants.js";

// POST /api/documentos/upload
export default async (request, response) => {
    try {
        const arquivo = request.files.documento;
        const idUser = request.user.id;

        if (!idUser) {
            return response
                .status(CONSTANTS.HTTP.NOT_FOUND)
                .json({ error: 'Usuário não encontrado' });
        }

        // Gera um nome único para o arquivo
        const newName = `${Date.now()}_${arquivo.name.replace(/\s+/g, '_')}`;
        const caminho = CONSTANTS.DIR + `/storage/documents/${newName}`;

        // Salva o documento no banco de dados
        const documento = await DocumentoModel.create({
            documento: newName,
            id_user: idUser
        });

        // Move o arquivo para o diretório de destino
        arquivo.mv(caminho, async (err) => {
            if (err) {
                // Se houver erro ao salvar o arquivo, exclui o registro do banco
                await DocumentoModel.destroy({
                    where: {
                        id: documento.id
                    }
                });

                return response
                    .status(CONSTANTS.HTTP.SERVER_ERROR)
                    .json({ error: 'Erro ao salvar arquivo' });
            }

            return response
                .status(CONSTANTS.HTTP.SUCCESS_CREATED)
                .json({
                    mensagem: 'Documento enviado com sucesso!',
                    documento: {
                        id: documento.id,
                        nome: newName,
                        usuario: request.user.nome
                    }
                });
        });
    } catch (error) {
        console.error(error);
        return response
            .status(CONSTANTS.HTTP.SERVER_ERROR)
            .json({ error: 'Erro ao processar a requisição' });
    }
}