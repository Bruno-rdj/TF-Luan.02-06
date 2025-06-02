import jwt from 'jsonwebtoken';

export default (request, response, next) => {

    /** No request tambem podemos trabalhar com o request */
    const authHeader = request.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return response.status(401).json({ error: 'Token não fornecido' });
    }

    const token = authHeader.split(' ')[1]; // pega o valor após 'Bearer '

    try {
        const userDecoded = jwt.verify(token, process.env.JWT_SECRET);
        request.user = userDecoded; // manda o user pra frente
        console.log(userDecoded);
        next(); // segue para a próxima função da rota
    } catch (err) {
        return response.status(401).json({ error: 'Token inválido ou expirado' });
    }

}