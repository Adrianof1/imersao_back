import express from "express"

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