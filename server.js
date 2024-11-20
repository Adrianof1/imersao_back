import express from "express";


const posts = [
    {
      descricao: "Uma foto test",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      descricao: "Gato brincando com um novelo de lã",
      imagem: "https://placekitten.com/400/200"
    },
    {
      descricao: "Paisagem de um pôr do sol",
      imagem: "https://picsum.photos/seed/picsum/600/400"
    },
    {
      descricao: "Cachorro correndo na praia",
      imagem: "https://source.unsplash.com/random/600x400/?dog,beach"
    },
    {
      descricao: "Comida caseira deliciosa",
      imagem: "https://loremflickr.com/640/480/food"
    },
    {
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

