import { Router } from 'express';
import JwtAuthMiddleware from '../../app/Http/Middlewares/JwtAuthMiddleware.js';
import VerifyPdfMiddleware from '../../app/Http/Middlewares/VerifyPdfMiddleware.js';
import UploadDocumentoController from '../../app/Http/Controllers/DocumentoApi/UploadDocumentoController.js';

export default (function () {
    const router = Router();

    // Rota para upload de documentos
    router.post('/api/documentos/upload', 
        JwtAuthMiddleware, 
        VerifyPdfMiddleware, 
        UploadDocumentoController
    );

    return router;
})();