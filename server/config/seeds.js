const db = require('./connection');
const { User, Product, Category } = require('../models');
const cocktails = require('./cocktails.json')

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Gin' },
    { name: 'Rum' },
    { name: 'Vodka' },
    { name: 'Tequila' },
    { name: 'Whiskey' },
    { name: 'AddOnsFood' },
    { name: 'AddOnsZoom' }
  ]);
  console.log(categories);
  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    // {
    
    //   category: categories[0]._id,
    //   name: 'Fitzgerald',
    //   description:
    //     'The Fitzgerald Cocktail is a modern take on the classic Gin Sour, without the egg whites. This simple to make and refreshing cocktail is taken to the next level by using freshly squeezed lemon juice and a premium dry gin.',
    //   image: 'https://cocktaildb.com/wp-content/uploads/2021/11/Fitzgerald-Cocktail-Recipe.jpg',
    //   ingredients: ['Gin, Fresh Lemon Juice, Simple Syrup, Angostura Bitters, Slice of Lemon, Ice'],
    //   price: 15.00,
    //   quantity: 500
    // },
    {
      category: categories[0]._id,
      name: "Ruby Negroni",
      image: "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
      ingredients: ["Gin, Campari, Tawny Port, Raspberry Syrup, Prosecco, Raspberry"],
      price: 15.99,
      description: "Tawny Ports are wines made from red grapes, that are aged in wooden barrels, exposing them to gradual oxidation and evaporation.",
      quantity: 500
  },
  {
      category: categories[0]._id,
      name: "Vesper Martini",
      image: "https://www.thecocktaildb.com/images/media/drink/mtdxpa1504374514.jpg",
      ingredients: [" Gin, 100 Proof Vodka, Kina Lillet"],
      price: 15.99,
      description: "The Vesper Martini was invented and named by fictional secret agent James Bond in the 1953 novel Casino Royale.",
      quantity: 500
  },
  {
      category: categories[0]._id,
      name: "Gin Berry",
      image: "https://www.thecocktaildb.com/images/media/drink/xrbhz61504883702.jpg",
      ingredients: ["Gin, Cranberry Juice, Lime Juice,"],
      price: 15.99,
      description: "Cranberry juice was first made in the 1600s.",
      quantity: 500
  },
  {
      category: categories[0]._id,
      name: "Gimlet",
      image: "https://www.thecocktaildb.com/images/media/drink/3xgldt1513707271.jpg",
      ingredients: ["Premium Gin, Lime Cordial"],
      price: 15.99,
      description: "The drink was named after British Royal Navy Surgeon General Sir Thomas D.Gimlette who allegedly introduced this drink as a means of inducing his messmates to take lime juice as an anti-scurvy medication.",
      quantity: 500
  }, 
  {
      category: categories[0]._id,
      name: "Singapore Sling",
      image: "https://www.thecocktaildb.com/images/media/drink/7dozeg1582578095.jpg",
      ingredients: ["Gin, Cherry Heering, Benedictine, Lemon Juice,  Orange Bitters,  Angostura Bitters,  Soda Water, Lemon slice."],
      price: 15.99,
      description: "The Singapore Sling is a cocktail that was developed sometime before 1915 by Ngiam Tong Boon, a bartender working at the Long Bar in Raffles Hotel Singapore.",
      quantity: 500
  },
  {
      category : categories[1]._id,
      name: "Mojito",
      image: "https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg",
      ingredients: ["White Rum, 8 Mint leaves, Sugar Syrup, Lime Juice, 2 Mint sprigs"],
      price: 15.99,
      description: "In the 2006 movie Miami Vice lead character Crockett is seen drinking a Mojito from the bartender in the very first scene.",
      quantity: 500
  },
  {
      category: categories[1]._id,
      name: "Daiquiri",
      image: "https://www.thecocktaildb.com/images/media/drink/mrz9091589574515.jpg",
      ingredients: ["White Rum, bar spoons Sugar, Lime Juice, Lime slice"],
      price: 15.99,
      description: "Due to Roosevelt`s Good Neighbour policy (which opened up trade with Cuba, Latin America and the Carribean) rum became easily obtainable in the 194S and this helped drive the popularity of the daiquiri in the US.",
      quantity: 500
  },
  {
      category: categories[1]._id,
      name: "Pi??a Colada",
      image: "https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg",
      ingredients: ["White Rum, Pineapple Juice, Coconut Cream, Cream, Pineapple Slice, pinch of Salt"],
      price: 15.99,
      description: "In 1978 the government declared the Pi??a Colada to be the official drink of Puerto Rico.",
      quantity: 500
  },
  {
      category: categories[1]._id,
      name: "Dark N Stormy",
      image: "https://www.thecocktaildb.com/images/media/drink/t1tn0s1504374905.jpg",
      ingredients: ["Dark Rum, 4 lime quarters, bar spoons brown sugar, splash ginger beer, lime wedge"],
      price: 15.99,
      description: "This drink gained popularity through the sailing community up and down the east coast of the USA, having been brought home by various sailors who visited Bermuda.",
      quantity: 500
  },
  {
      category: categories[1]._id,
      name: "Cuba Libre",
      image: "https://www.thecocktaildb.com/images/media/drink/ck6d0p1504388696.jpg",
      ingredients: ["Anejo Rum, 8 Lime wedges, Cola, Lime wedge"],
      price: 15.99,
      description: "In Russia, Cuba Libre without the lime juice is called Rock-n-Roll Star, after a popular song that features the recipe.",
      quantity: 500
  },
  {
      category: categories[3]._id,
      name: "Margarita",
      image: "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
      ingredients: ["Tequila, Triple Sec, Lime Juice, Simple Syrup, salt"],
      price: 15.99,
      description: "Margarita is the most common tequila-based cocktail in the world.",
      quantity: 500
  },
  {
      category: categories[3]._id,
      name: "Paloma",
      image: "https://www.thecocktaildb.com/images/media/drink/samm5j1513706393.jpg",
      ingredients: ["Tequila, Pink Grapefruit Juice, Sugar Syrup,  Lime Juice, Pink Grapefruit wedge"],
      price: 15.99,
      description: "The Paloma is the most popular tequila based cocktail in Mexico.",
      quantity: 500
  },
//   {
//       category: categories[3]._id,
//       name: "El Diablo",
//       image:"https://www.socialandcocktail.co.uk/wp-content/uploads/2011/12/El-Diablo.jpg",
//       ingredients: ["Tequila, Cr??me de Cassis, Lime Juice, Ginger Beer"],
//       price: 15.99,
//       description: "The EL Diablo appeared in Trader Vics Book of Food and Drink as early as 1946.",
//       quantity: 500
//   },
  {
      category: categories[3]._id,
      name: "Tequila Sunrise",
      image: "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
      ingredients: ["Tequila, Orange Juice, dash Grenadine Syrup, Lime wedge, Orange slice"],
      price: 15.99,
      description: "Tequila Sunrise, featuring Mel Gibson, holds a score of 44% on Rotten Tomatoes.",
      quantity: 500
  },
//   {
//       category: categories[3]._id,
//       name: "Baja Gold",
//       image: "https://www.socialandcocktail.co.uk/wp-content/uploads/2011/12/Baja-Gold-2.jpg",
//       ingredients: ["Tequila,Triple Sec, Pineapple Juice, Lime Juice, Simple Syrup, Lime Wedge"],
//       price: 15.99,
//       description: "Each pineapple plant produces one pineapple fruit.",
//       quantity: 500
//   },
  {
      category: categories[2]._id,
      name: "White Russian",
      image: "https://www.thecocktaildb.com/images/media/drink/vsrupw1472405732.jpg",
      ingredients: ["Vodka, Coffee Liqueur, Cream, Milk, Chocolate Powder, Coffee Bean"],
      price: 15.99,
      description: "The White Russian is the favorite drink of Jeffrey, The Dude, Lebowski, the main character of the 1998 film, The Big Lebowski.",
      quantity: 500
  },
  {
      category: categories[2]._id,
      name: "Cosmopolitan",
      image: "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
      ingredients: ["Citrus Vodka, Triple Sec, Cranberry Juice, squeezed lemon, Sugar Syrup"],
      price: 15.99,
      description: "The Cosmopolitan gained significant popularity in the 1990s partly due to the fact that Sarah Jessica Parker's character, Carrie Bradshaw, in the hit televsion program, Sex in the City, often ordered the drink.",
      quantity: 500
  },
//   {
//       category: categories[2]._id,
//       name: "French Martini",
//       image: "https://www.thecocktaildb.com/images/media/drink/clth721504373134.jpg",
//       ingredients: [" Vodka, Chambord, Pineapple Juice, Raspberries for Garnish"],
//       price: 15.99,
//       description: "The part that makes this a French martini is the Chambord raspberry liqueur.",
//       quantity: 500
//   },
  {
      category: categories[2]._id,
      name: "Espresso Martini",
      image: "https://www.thecocktaildb.com/images/media/drink/n0sx531504372951.jpg",
      ingredients: ["Vanilla Vodka, Kahl??a, Double Espresso, Sugar Syrup, 3 Coffee Beans"],
      price: 15.99,
      description: "Coffee is the second most traded commodity on earth.",
      quantity: 500
  },
  {
      category: categories[2]._id,
      name: "Moscow Mule",
      image: "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
      ingredients: ["Vodka, Lime juice, Sugar Syrup, splash Ginger Beer"],
      price: 15.99,
      description: "The Moscow Mule was invented in 1941 John G Martin at a bar in Sunset Boulevard which was popular with celebrities.",
      quantity: 500
  },
  {
      category: categories[4]._id,
      name: "Old Fashioned",
      image: "https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg",
      ingredients:  ["Bourbon, Angostura Bitters, Orange Bitters, Sugar, Orange peel"],
      price: 15.99,
      description: "The name references the combinations age, as it is perhaps the first drink to be called a cocktail.",
      quantity: 500
  },
//   {
//       category: categories[4]._id,
//       name: "Lynchberg Lemonade",
//       image: "RubyNegroni.jpeg",
//       ingredients: ["Tennessee Whiskey,Triple -Sec,Sour Mix,Lemon-Lime Soda"],
//       price: 15.00,
//       description: "Lynchburg , Tennesse, is best known as the location of the Jack Daniels distillery.",
//       quantity: 500

//   },
  {
      category: categories[4]._id,
      name: "Mint Julep",
      image: "https://www.thecocktaildb.com/images/media/drink/squyyq1439907312.jpg",
      ingredients: ["Knob Creek Bourbon, Granulated Sugar, 8 Mint leaves, Mint sprigs"],
      price: 15.99,
      description: "Since 1938, the Mint Julep has been promoted in association with the Kentucky Derby.",
      quantity: 500

  },
//   {
//       category: categories[4]._id,
//       name: "Donald Sutherland",
//       image: "https://www.socialandcocktail.co.uk/wp-content/uploads/2011/12/Donald-Sutherland.jpg",
//       ingredients: ["Rye Whiskey, Drambuie"],
//       price: 15.99,
//       description: "Both Donald and his son Kiefer starred in the 1997 movie A Time to Kill",
//       quantity: 500

//   },
  {
      category: categories[4]._id,
      name: "Sazerac",
      image: "https://www.thecocktaildb.com/images/media/drink/vvpxwy1439907208.jpg",
      ingredients: ["Rye Whiskey, Absinthe, 3 dashes of Peychauds Bitters, Sugar Cube, Lemon Peel"],
      price: 15.99,
      description: "In The Curious Case of Benjamin Button when he meets with his father for drinks, his father orders a Sazerac.",
      quantity: 500

  }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
