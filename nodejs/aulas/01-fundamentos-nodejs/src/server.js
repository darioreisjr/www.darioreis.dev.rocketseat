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

const server = http.createServer((req, res)=>{
    const {url, method} = req

    if(method === 'GET' && url === '/users'){
        return res.end('Listagem de usuários')
        }

    if(method === 'POST' && url === '/users'){
        return res.end('Criando um novo usuário')
        }

    return res.end('Hello World')
})

server.listen(3333)


