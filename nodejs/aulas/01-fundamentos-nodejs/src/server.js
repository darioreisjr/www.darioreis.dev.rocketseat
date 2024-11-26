import http from 'node:http'
import { randomUUID } from 'node:crypto'
import { json } from './middlewares/json.js'
import { Database } from './database.js'

// UUID => Unique Universal ID

const database = new Database

// - Criar usuários
// - Listagem usuários
// - Edição de usuários
// - Remoção de usuários

// - HHTP
//     - Método HTTP 
//     - URL

// GET, POST, PUT, DELETE, PATCH

// GET => Buscar um recurso do back-end
// POST => Criar um novo recurso no back-end
// PUT => Atualizar um recurso no back-end
// DELETE => Deletar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end

// GET /users => Buscando usuários do back-end
// POST /users => Criando um novo usuário no back-end

// Stateful - Stateless
// JSON - JavaScript Object Notation
// Cabeçalhos (Requisições / Respostas) => Metadados

// HTTP Status Code

const users = []

const server = http.createServer(async (req, res) => {
    const { url, method } = req

    await json(req, res)

    if (method === 'GET' && url === '/users') {
        const users = database.select('users')

        return res
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body

        const user = {
            id: randomUUID(),
            name,
            email,
        }

        database.insert('users', user)

        //return res.end('Criando um novo usuário')
        return res.writeHead(201).end()
    }

    //return res.end('Hello World')
    res.writeHead(404).end()
})

server.listen(3333)


