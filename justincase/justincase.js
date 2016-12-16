'use strict'
class Fooditem {
  constructor(FooditemInfo) {
    this.name = FooditemInfo.name;
    this.calories = FooditemInfo.calories;
    this.vegan = FooditemInfo.vegan;
    this.glutenfree = FooditemInfo.glutenfree;
    this.citrusfree = FooditemInfo.citrusfree;

  }
  stringify(Fooditem) {
    return this.name + "\n" + this.calories + "\n" + this.vegan + "\n" +
      this.glutenfree + "\n" + this.citrusfree
  }
}



// var ItalianFood = new Fooditem({
//   name: 'stromboliguacamole',
//   calories: '10000',
//   vegan: "yes",
//   glutenfree: "no",
//   citrusfree: "yes",
// });

// var MexicanFood = new Fooditem({
//   name: 'burritos',
//   calories: '20000',
//   vegan: "no",
//   glutenfree: "no",
//   citrusfree: "yes",
// });
// var AmericanFood = new Fooditem({
//   name: 'fried chicken',
//   calories: '100000',
//   vegan: "no",
//   glutenfree: "no",
//   citrusfree: "no",
// })     

class Drinks {
  constructor(name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
   }
}
  
  var Coconutrum = new Drinks(
  "Coconut Rum",
  "alcoholic beverage",
  "9.99",
  ["malibu rum", "coca cola", "splash of pineapple juice"]
);

class Plates {
  constructor(name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
  }
  
}

var orderList = [
  {
    name : "Smothered Enchiladas",
    description : "Beef, Chicken or Steak",
    price : 12.99,
    ingredients : ["choice of meat", "corn tortilla", "green chile", "cheese"],
  },
  {
    name : "Tostada",
    description : "Flour tortilla grilled with deliciousness inside",
    price : 10.99,
    ingredients : ["Flour tortilla", "Refried beans", "Lettuce", "Salsa", "Sour Cream"],
  },
  {
    name : "Huevos Rancheros",
    description : "Smothered eggs with hashbrowns",
    price : 14.99,
    ingredients : ["Organic cage free eggs", "Salsa", "Ranch", "Hashbrowns"],
  },
  {
    name : "Burrito",
    description : "Tortilla filled with goodness",
    price : 10.99,
    ingredients : ["Refried beans", "Choice of: Steak, Chicken, or Beef", "Cheese"],
  }
]

class Menu {
  constructor(plates, drinks){
    this.orderList = plates,
    this.Drinks = drinks
  }
}

class Restaurant {
  constructor(name, description, menu){
    this.name = name;
    this.description = description;
    this.menu = menu;
  }
}

var StromboliGaucamole = new Restaurant(
      "Stromboli Guacamole",
      "A twist on modern Mexican food",
       [orderList]);




class Customer {
  constructor(dietarypreferance){
    this.vegan = dietarypreferance.vegan;
    this.glutenfree = dietarypreferance.glutenfree;
    this.citrusfree = dietarypreferance.citrusfree;
  }
}
   
 

