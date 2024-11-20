import express from "express";
import conectarAoBanco from "./src/config/dbconfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Inicializa o aplicativo Express
const app = express();



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



// function buscarPostPorID(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id)
//   })
// }
// app.get("/posts/:id", (req, res) => {
//   const index = buscarPostPorID(req.params.id)
//   res.status(200) .json(posts[index]);
// });
