import http from 'node:http'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// Query parameters: URL stateful => Filtros, Paginação, Ordenação, Não-obrigatórios
// Route Paramemeters: Identificação de recurso
// Request Body: Envio de informações de um formulário (HTTPs)

// http://localhost:3333/users?userId=1&name=Dario

// GET http://localhost:3333/users/1
// DELETE http://localhost:3333/users/1

// POST http://localhost:3333/users

// Edição e remoção 

const server = http.createServer(async (req, res) => {
    const { url, method } = req

    await json(req, res)

    const route = routes.find(route => {
        return route.method === method && route.path.test(url)
    })

    if (route) {
        const routeParams = req.url.match(route.path)

        console.log(routeParams)

        return route.handler(req, res)
    }

    return res.writeHead(404).end()
})

server.listen(3333)


