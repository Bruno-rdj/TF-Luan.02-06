import DocumentoModel from "../../../Models/DocumentoModel.js";
import CONSTANTS from "../../../../config/constants.js";
import fs from 'fs';
import path from 'path';

export default async (request, response) => {
    try {
        const arquivo = request.files.documento;
        const idUser = request.user.id;

        // Sanitiza o nome do arquivo removendo caracteres especiais
        const sanitizedName = arquivo.name.replace(/[^a-zA-Z0-9._-]/g, '_');
        
        // Gera um nome único para o arquivo
        const newName = `${Date.now()}_${sanitizedName}`;
        const documentDir = path.join(CONSTANTS.DIR, 'storage', 'documents');
        const caminho = path.join(documentDir, newName);

        // Verifica se o diretório existe, se não, cria
        if (!fs.existsSync(documentDir)) {
            fs.mkdirSync(documentDir, { recursive: true });
        }

        // Salva o documento no banco de dados
        const documento = await DocumentoModel.create({
            documento: newName,
            id_user: idUser
        });

        // Move o arquivo para o diretório de armazenamento
        arquivo.mv(caminho, (err) => {
            if (err) {
                // Se houver erro ao salvar o arquivo, exclui o registro do banco
                DocumentoModel.destroy({ where: { id: documento.id } });
                console.error('Erro ao salvar arquivo:', err);
                
                return response
                    .status(CONSTANTS.HTTP.SERVER_ERROR)
                    .json({ error: 'Erro ao salvar o arquivo PDF' });
            }

            return response
                .status(CONSTANTS.HTTP.SUCCESS_CREATED)
                .json({
                    mensagem: 'Documento PDF enviado com sucesso!',
                    documento: {
                        id: documento.id,
                        nome: newName,
                        usuario_id: idUser
                    }
                });
        });
    } catch (error) {
        console.error('Erro no upload de documento:', error);
        return response
            .status(CONSTANTS.HTTP.SERVER_ERROR)
            .json({ error: 'Erro ao processar o upload do documento' });
    }
}