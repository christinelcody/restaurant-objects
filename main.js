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

class Dietarypreference {
  constructor(DietaryInfo){
    this.vegan = DietaryInfo;
    this.citrusfree = DietaryInfo;
    this.glutenfree = DietaryInfo;
  }
}

class Drinks {
  constructor(name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
   }
}

var drinkList = [
  {
    name : "Margarita",
    description : "Patron' margarita",
    price : 8.99,
    ingredients : ["Patron'", "Margarita mix"],
  },
  {
    name : "Pina' colada",
    description : "Strawberry pina' colada",
    price : 8.99,
    ingredients : ["Vodka", "colada mix"],
  }
]

class Plate {
  constructor(name, description, price, ingredients){
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
 


var Menu = [];

Menu.push(orderList);
Menu.push(drinkList);
for(var i = 0; i < Menu.length; i++){
   console.log(Menu[i]);
}
    

class Restaurant {
  constructor(name, description, menu){
    this.name = name;
    this.description = description;
    this.menu = menu;
  }
  stringify(Restaurant){
    
  }
}

var StromboliGaucamole = new Restaurant("Stromboli Gaucamole", "Mexican Food", Menu)





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








 



















