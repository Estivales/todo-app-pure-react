module.exports = function (request, response, next) {
    response.header('Axxess-Control-Allow-Origin', '*')
    response.header('Axxess-Control-Allow-Methos', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    response.header('Axxess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next() // para seguir fluxo de chamada
}