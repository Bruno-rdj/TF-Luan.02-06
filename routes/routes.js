import { Router } from 'express';
import express from 'express';

import api from './api.js';
import web from './web.js';
import JwtAuthMiddleware from '../app/Http/Middlewares/JwtAuthMiddleware.js';
import LoginJwtController from '../app/Http/Controllers/LoginJwtController.js';
import fileUpload from 'express-fileupload';
import CriarUsuariosController from '../app/Http/Controllers/CriarUsuariosController.js';
import LogMiddleware from '../app/Http/Middlewares/LogMiddleware.js';

export default (function () {

    const router = Router();

    /** Usado para servir json */
    router.use(express.json());

    router.use(express.urlencoded({ extended: true }));

    // Configuração do CORS
    router.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        
        if (req.method === 'OPTIONS') {
            return res.status(200).end();
        }
        
        next();
    });

    // Configuração do fileUpload com limite de tamanho
    router.use(fileUpload({
        limits: { 
            fileSize: process.env.MAX_FILE_SIZE || 10 * 1024 * 1024 // 10MB padrão
        },
        abortOnLimit: true
    }));

    // Apis
    router.use('/api', JwtAuthMiddleware, LogMiddleware, api);
    router.post('/login', LoginJwtController);
    router.get('/criar-usuarios', CriarUsuariosController);

    ////
    router.use('/', web);

    /** Se nenhuma rota for encontrada, 404 neles! */
    router.use((request, response) => {
        response.status(CONSTANTS.HTTP.NOT_FOUND).json({ error: "Not found" });
    });

    return router;

})();