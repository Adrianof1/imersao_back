import express from "express";
import conectarAoBanco from "./src/config/dbconfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Inicializa o aplicativo Express
const app = express();

// Permite que o Express entenda requisições com corpo em formato JSON
app.use(express.json());

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000");
});

// Função assíncrona para obter todos os posts do banco de dados
async function getTodosPosts() {
    // Obtém o banco de dados 'imersao-instabytes'
    const db = conexao.db("imersao-instabytes");
    // Obtém a coleção 'posts'
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}

// Rota para obter todos os posts
app.get("/posts", async (req, res) => {
    try {
        // Chama a função para obter os posts
        const posts = await getTodosPosts();
        // Envia os posts como resposta em formato JSON
        res.status(200).json(posts);
    } catch (error) {
        // Caso ocorra um erro, registra no console e envia uma mensagem de erro
        console.error("Erro ao obter os posts:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
});

// function buscarPostPorID(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id)
//   })
// }
// app.get("/posts/:id", (req, res) => {
//   const index = buscarPostPorID(req.params.id)
//   res.status(200) .json(posts[index]);
// });
