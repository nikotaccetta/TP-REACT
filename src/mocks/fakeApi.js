export const product = [
  {
    id: 1,
    name: "Spiderman",
    marca: "IronStudios",
    categoria: "Marvel",
    stock: 4,
    description: "asd",
    price: "50.000",
    img: "https://www.sideshow.com/storage/product-images/200561/spider-man-vs-venom_marvel_gallery_6160785dd4598.jpg",
  },
  {
    id: 2,
    name: "Batman",
    marca: "IronStudios",
    categoria: "DC",
    stock: 4,
    description: "asd",
    price: "50.000",
    img: "https://www.sideshow.com/storage/product-images/908580/batman-deluxe_dc-comics_gallery_60ba9827a4190.jpg",
  },
  {
    id: 3,
    name: "DartVader",
    marca: "IronStudios",
    categoria: "StarWars",
    stock: 4,
    description: "asd",
    price: "50.000",
    img: "https://www.sideshow.com/storage/product-images/400103/darth-vader_star-wars_gallery_5d852f572aa5a.jpg",
  },
  {
    id: 4,
    name: "Hulk",
    marca: "IronStudios",
    categoria: "Marvel",
    stock: 4,
    description: "asd",
    price: "50.000",
    img: "https://www.sideshow.com/storage/product-images/200571/hulk-vs-hulkbuster_marvel_gallery_621ecaa16bfb6.jpg",
  },
  {
    id: 5,
    name: "Superman",
    marca: "IronStudios",
    categoria: "DC",
    stock: 4,
    description: "asd",
    price: "50.000",
    img: "https://www.sideshow.com/storage/product-images/907931/clark-kent-deluxe_dc-comics_gallery_60467b227c01b.jpg",
  },
  {
    id: 6,
    name: "Anakin",
    marca: "IronStudios",
    categoria: "StarWars",
    stock: 4,
    description: "asd",
    price: "50.000",
    img: "https://www.sideshow.com/storage/product-images/300732/anakin-skywalker-mythos_star-wars_gallery_624dc83b377af.jpg",
  },
];

export const getData = (categoryId) => {
  return new Promise((resolve, reject) => {
    const productosFiltrados = product.filter(
      (prod) => prod.categoria === categoryId
    );
    setTimeout(() => {
      categoryId ? resolve(productosFiltrados) : resolve(product);
    }, 2000);
  });
};

export const getProd = (id) => {
  return new Promise((resolve, reject) => {
    const pruductoEncontrato = product.find
    ((prod) => prod.id === Number(id)
    );
    setTimeout(() => {
      resolve(pruductoEncontrato);
    }, 1000);
  });
};
