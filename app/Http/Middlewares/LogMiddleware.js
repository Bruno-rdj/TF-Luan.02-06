export default (request, response, next) => {

    console.log(request.body);

    next();

}