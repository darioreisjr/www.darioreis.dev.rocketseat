import http from 'node:http'

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

const server = http.createServer((req, res)=>{
    const {url, method} = req

    if(method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
        }

    if(method === 'POST' && url === '/users'){
        users.push({
            id: 1,
            name: 'João',
            email: 'joao@gmail.com'
        })
        //return res.end('Criando um novo usuário')
        return res.writeHead(201).end()
        }

    //return res.end('Hello World')
    res.writeHead(404).end()
})

server.listen(3333)


