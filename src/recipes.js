const recipes = [
   { 
     id: 1,
     dishName: 'Bahn Mi', 
     directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
     ingredients: 'Bread',
     category: 'dinner',
     img: require('./img/bahn-mi.png').default
   },
   { 
     id: 2,
     dishName: 'Carne Asada Tacos', 
     directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
     ingredients: 'bread',
     category: 'dinner',
     img: require('./img/carne-asada-tacos.jpg').default
   },
   { 
     id: 3,
     dishName: 'Chicken Tikka Masala', 
     directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
     ingredients: 'bread',
     category: 'dinner',
     img: require('./img/chicken-tikka-masala.jpeg').default
   },
   { 
     id: 4,
     dishName: 'Quinoa Bowl', 
     directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
     ingredients: 'bread',
     category: 'dinner',
     img: require('./img/quinoa-bowl.jpeg').default
   },
   { 
     id: 5,
     dishName: 'Stir-fry', 
     directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
     ingredients: 'bread',
     category: 'dinner',
     img: require('./img/chicken-stirfry.jpg').default
   },
   { 
     id: 6,
     dishName: 'Burritos', 
     directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
     ingredients: 'bread',
     category: 'dinner',
     img: require('./img/burrito.jpg').default
   },
  //  { 
  //    id: 7,
  //    dishName: 'Caldo De Albondigas', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 8,
  //    dishName: 'Chili Enchilads', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 9,
  //    dishName: 'CHicken Noodle Soup', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 10,
  //    dishName: 'Quesadillas', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 11,
  //    dishName: 'Chicken and Broccoli', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 12,
  //    dishName: 'Caribbean Jerk Chicken', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 13,
  //    dishName: 'Spaghetti and Meatballs', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 14,
  //    dishName: 'MeatBall Subs', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 15,
  //    dishName: 'Pasta Salad', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 16,
  //    dishName: 'Chicken Parmesan', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 17,
  //    dishName: 'Fish Pasta Salad', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 18,
  //    dishName: 'Katsu', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 19,
  //    dishName: 'Chicken Teriyaki', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 20,
  //    dishName: 'Phad Thai', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 21,
  //    dishName: 'Fried Rice', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 22,
  //    dishName: 'Spring Rolls', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 23,
  //    dishName: 'Beef and Broccoli', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 24,
  //    dishName: 'Hamburger', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 25,
  //    dishName: 'Salmon Burger', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 26,
  //    dishName: 'Turkey Burger', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 27,
  //    dishName: 'Chile Rellenos', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 28,
  //    dishName: 'Cesar Salad', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 29,
  //    dishName: 'French Dips', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 30,
  //    dishName: 'Squash Pasta', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 31,
  //    dishName: 'Oven Roasted Chicken', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 32,
  //    dishName: 'Chicken with Zucchini', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 33,
  //    dishName: 'Nachos', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 34,
  //    dishName: 'Tostadas', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 35,
  //    dishName: 'Portabello Mushroom Pizzas', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 36,
  //    dishName: 'Chili', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 37,
  //    dishName: 'Tortas', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 39,
  //    dishName: 'Salmon', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 40,
  //    dishName: 'Wraps', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 41,
  //    dishName: 'Viste', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 42,
  //    dishName: 'Chicken Sandwiches', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 43,
  //    dishName: 'Steak and Spuds', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 44,
  //    dishName: 'Fajitas', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 45,
  //    dishName: 'Carne Asada', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 46,
  //    dishName: 'Chow Mein', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 47,
  //    dishName: 'BLT', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 48,
  //    dishName: 'Chicken Wings', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 49,
  //    dishName: 'Cornish Hen', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 50,
  //    dishName: 'Pollo Asado', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 51,
  //    dishName: 'Halal Style Chicken', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 52,
  //    dishName: 'BiBimBop', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  },
  //  { 
  //    id: 52,
  //    dishName: 'Grilled Cheese and Tomato Soup', 
  //    directions: 'Whisk half-and-half, ricotta cheese, eggs, melted butter, and lemon extract together in a separate bowl until smooth. Pour into the flour mixture and mix until thoroughly combined.',
  //    ingredients: 'bread',
  //    category: 'dinner',
  //    img: require('./img/birriaTacos.jpeg').default
  //  }
]

export default recipes