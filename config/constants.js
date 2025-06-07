export default {
    DIR: process.cwd(),
    HTTP: {
        SUCCESS: 200,
        SUCCESS_CREATED: 201,
        SUCCESS_NO_CONTENT: 204,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        SERVER_ERROR: 500
    },
    MAX_GET_LIMIT: 100,
    UPLOAD: {
        MAX_FILE_SIZE: process.env.MAX_FILE_SIZE || 10 * 1024 * 1024, // 10MB padrão
        ALLOWED_EXTENSIONS: ['.pdf']
    }
};