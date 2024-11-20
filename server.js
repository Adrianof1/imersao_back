import express from "express";


const posts = [
    {
      id: 1,
      descricao: "Uma foto de cachorro",
      imagem: "https://placekitten.com/600/400"
    },

    {
      id: 2,
      descricao: "Gato brincando com um novelo de lã",
      imagem: "https://placekitten.com/400/200"
    },

    {
      id: 3,
      descricao: "Paisagem de um pôr do sol",
      imagem: "https://picsum.photos/seed/picsum/600/400"
    },

    {
      id: 4,
      descricao: "Cachorro correndo na praia",
      imagem: "https://source.unsplash.com/random/600x400/?dog,beach"
    },

    {
      id: 5,
      descricao: "Comida caseira deliciosa",
      imagem: "https://loremflickr.com/640/480/food"
    },

    {
      id: 6,
      descricao: "Montanha com neve",
      imagem: "https://unsplash.com/photos/mountain"
    }
  ];

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200) .json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id)
  })
}
app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id)
  res.status(200) .json(posts[index]);
});
