const FoodItems = [
  {
    title: { en: "Tacos", es: "Tacos" },
    image: "/foodImages/Tacos.jpg",
    description: {
      en: "Corn tortilla with cheese, lettuce, tomato, onion, cilantro, lime, and Mexican cream.",
      es: "Tortilla de maíz con queso, lechuga, tomate, cebolla, cilantro, limón y crema mexicana.",
    },
    price: "3.50",
    type: "regular",
  },
  {
    title: { en: "Tamales", es: "Tamales" },
    image: "/foodImages/Tamales.jpg",
    description: {
      en: "Mexican cheese, lettuce, tomato, onion, cilantro, and sour cream.",
      es: "Queso mexicano, lechuga, tomate, cebolla, cilantro y crema.",
    },
    price: "3.99",
    type: "regular",
  },
  {
    title: { en: "Huarache de Maiz", es: "Huarache de Maíz" },
    image: "/foodImages/HuaracheDeMaiz.jpg",
    description: {
      en: "Corn tortilla with meat, mozzarella cheese, lettuce, tomato, onion, and cilantro.",
      es: "Tortilla de maíz con carne, queso mozzarella, lechuga, tomate, cebolla y cilantro.",
    },
    price: "11.00",
    type: "regular",
  },
  {
    title: { en: "Huarache Chaman", es: "Huarache Chaman" },
    image: "/foodImages/HuaracheChaman.jpg",
    description: {
      en: "Corn tortilla with meat (chorizo/papa), ham, Mexican sausage, egg, mozzarella cheese, lettuce, tomato, onion, and cilantro.",
      es: "Tortilla de maíz con carne (chorizo/papa), jamón, salchicha mexicana, huevo, queso mozzarella, lechuga, tomate, cebolla y cilantro.",
    },
    price: "13.00",
    type: "regular",
  },
  {
    title: { en: "Quesadilla de Harina", es: "Quesadilla de Harina" },
    image: "/foodImages/QuesadillaDeHarina.jpg",
    description: {
      en: "Flour tortilla with meat, mozzarella cheese, lettuce, tomato, onion, and cilantro.",
      es: "Tortilla de harina con carne, queso mozzarella, lechuga, tomate, cebolla y cilantro.",
    },
    price: "11.00",
    type: "regular",
  },
  {
    title: { en: "Burrito", es: "Burrito" },
    image: "/foodImages/Burrito.jpg",
    description: {
      en: "Flour tortilla with meat, beans, rice, lettuce, tomato, onion, cilantro, and mozzarella cheese.",
      es: "Tortilla de harina con carne, frijoles, arroz, lechuga, tomate, cebolla, cilantro y queso mozzarella.",
    },
    price: "11.00",
    type: "regular",
  },
  {
    title: { en: "Larguita", es: "Larguita" },
    image: "/foodImages/Larguita.jpg",
    description: {
      en: "Corn tortilla with meat, refried beans, lettuce, tomato, onion, cilantro, Mexican cream, and Mexican cheese.",
      es: "Tortilla de maíz con carne, frijoles refritos, lechuga, tomate, cebolla, cilantro, crema mexicana y queso mexicano.",
    },
    price: "11.00",
    type: "regular",
  },
  {
    title: { en: "Gordita", es: "Gordita" },
    image: "/foodImages/Gordita.jpg",
    description: {
      en: "Corn tortilla with meat, lettuce, tomatoes, onions, cilantro, and Mexican cheese.",
      es: "Tortilla de maíz con carne, lechuga, tomate, cebolla, cilantro y queso mexicano.",
    },
    price: "15.00",
    type: "regular",
  },
  {
    title: { en: "Sope", es: "Sope" },
    image: "/foodImages/Sope.jpg",
    description: {
      en: "Corn tortilla with meat, refried beans, lettuce, tomatoes, onions, cilantro, sour cream, and Mexican cheese.",
      es: "Tortilla de maíz con carne, frijoles refritos, lechuga, tomate, cebolla, cilantro, crema y queso mexicano.",
    },
    price: "5.15",
    type: "regular",
  },
  {
    title: { en: "Torta", es: "Torta" },
    image: "/foodImages/Torta.jpg",
    description: {
      en: "Mexican telera bread with meat, mayo, lettuce, tomatoes, onions, and mozzarella cheese.",
      es: "Pan telera mexicano con carne, mayonesa, lechuga, tomate, cebolla y queso mozzarella.",
    },
    price: "11.00",
    type: "regular",
  },
  {
    title: { en: "Torta Cubana", es: "Torta Cubana" },
    image: "/foodImages/TortaCubana.jpg",
    description: {
      en: "Mexican telera bread with Mexican sausage, ham, eggs, mayo, lettuce, tomatoes, onions, and mozzarella cheese.",
      es: "Pan telera mexicano con salchicha mexicana, jamón, huevos, mayonesa, lechuga, tomate, cebolla y queso mozzarella.",
    },
    price: "13.00",
    type: "regular",
  },
  {
    title: { en: "Chilaquiles Verdes", es: "Chilaquiles Verdes" },
    image: "/foodImages/ChilaquilesVerdes.jpg",
    description: {
      en: "Fried corn tortillas covered with tomatillo green sauce. includes rice, beans, 2 fried eggs, lettuce, tomatoes, onions, cilantro, Mexican cheese, sour cream, and your choice of meat.",
      es: "Totopos fritos bañados en salsa verde de tomatillo. incluye arroz, frijoles, 2 huevos fritos, lechuga, tomate, cebolla, cilantro, queso mexicano, crema y tu elección de carne.",
    },
    price: "13.00",
    type: "regular",
  },
  {
    title: {
      en: "Platillo de Bistek en Salsa Roja",
      es: "Platillo de Bistek en Salsa Roja",
    },
    image: "/foodImages/PlatilloBistekSalsaRoja.jpg",
    description: {
      en: "Mexican-style steak made of beef strips simmered in a homemade red sauce, served with a side of rice, beans, and five tortillas.",
      es: "Bistek estilo mexicano que consiste en tiras de carne de res cocidas a fuego lento en una deliciosa salsa roja casera, acompañado de arroz, frijoles y cinco tortillas.",
    },
    price: "12.50",
    type: "regular",
  },
  {
    title: {
      en: "Platillo de Costilla en Salsa Verde",
      es: "Platillo de Costilla en Salsa Verde",
    },
    image: "/foodImages/PlatilloCostillaSalsaVerde.jpg",
    description: {
      en: "Mexican-style pork ribs simmered in a delicious green tomatillo sauce, served with a side of rice, beans, and five tortillas.",
      es: "Costillas de cerdo al estilo mexicano cocidas a fuego lento en una deliciosa salsa verde de tomatillo, acompañadas de arroz, frijoles y cinco tortillas.",
    },
    price: "12.50",
    type: "regular",
  },
  {
    title: { en: "Menudo", es: "Menudo" },
    image: "/foodImages/Menudo.jpg",
    description: {
      en: "Traditional Mexican beef tripe soup served with onions, cilantro, and lime.",
      es: "Sopa tradicional mexicana de pancita servida con cebolla, cilantro y limón.",
    },
    price: "13.00",
    type: "special",
  },
  {
    title: { en: "Pozole", es: "Pozole" },
    image: "/foodImages/Pozole.jpg",
    description: {
      en: "Traditional hominy soup with meat, served with lettuce, radish, onion, and lime.",
      es: "Sopa tradicional de maíz cacahuazintle con carne, servida con lechuga, rábano, cebolla y limón.",
    },
    price: "13.00",
    type: "special",
  },
  {
    title: { en: "Side of Rice & Beans", es: "Orden de Arroz y Frijoles" },
    image: "",
    description: { en: "", es: "" },
    price: "3.50",
    type: "other",
  },
  {
    title: {
      en: "Side of 5 Corn Tortillas",
      es: "Orden de 5 Tortillas de Maíz",
    },
    image: "",
    description: { en: "", es: "" },
    price: "3.50",
    type: "other",
  },
  {
    title: { en: "Extra Meat", es: "Carne Extra" },
    image: "",
    description: { en: "", es: "" },
    price: "3.00",
    type: "other",
  },
  {
    title: { en: "Extra Eggs", es: "Huevos Extra" },
    image: "",
    description: { en: "", es: "" },
    price: "2.00",
    type: "other",
  },
  {
    title: { en: "Coffee & Cinnamon Tea", es: "Café y Té de Canela" },
    image: "",
    description: { en: "", es: "" },
    price: "2.00",
    type: "other",
  },
  {
    title: { en: "Jelly", es: "Gelatina" },
    image: "",
    description: { en: "", es: "" },
    price: "3.00",
    type: "dessert",
  },
  {
    title: { en: "Rice with Milk", es: "Arroz con Leche" },
    image: "",
    description: { en: "", es: "" },
    price: "3.00",
    type: "dessert",
  },
  {
    title: { en: "Pan Dulce", es: "Pan Dulce" },
    image: "",
    description: { en: "", es: "" },
    price: "3.00",
    type: "dessert",
  },
  {
    title: { en: "Flan", es: "Flan" },
    image: "",
    description: { en: "", es: "" },
    price: "5.00",
    type: "dessert",
  },
  {
    title: { en: "Pastel", es: "Pastel" },
    image: "",
    description: { en: "", es: "" },
    price: "5.00",
    type: "dessert",
  },
  {
    title: { en: "Fruit", es: "Fruta" },
    image: "",
    description: { en: "", es: "" },
    price: "5.00",
    type: "dessert",
  },
];

export default FoodItems;
