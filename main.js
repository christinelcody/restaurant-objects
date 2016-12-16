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
var ItalianFood = new Fooditem({
  name: 'stromboliguacamole',
  calories: '10000',
  vegan: "yes",
  glutenfree: "no",
  citrusfree: "yes",
});

var MexicanFood = new Fooditem({
  name: 'burritos',
  calories: '20000',
  vegan: "no",
  glutenfree: "no",
  citrusfree: "yes",
});
var AmericanFood = new Fooditem({
  name: 'fried chicken',
  calories: '100000',
  vegan: "no",
  glutenfree: "no",
  citrusfree: "no",
})     

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
   
var SmotheredEnchilads = new Plates (
   "Smothered Green Chile Enchiladas",
   "Beef, Chicken, Steak",
   12.99,
   ["choice of meat", "corn tortilla", "green chile", "cheese"]
)



var tostada = new Plates(
  'Tostada',
  "Flour tortilla grilled with deliciousness inside",
   10.99,
  ["Flour Tortilla, Refried Beans, Lettuce, Salsa, Sour Cream"]
)

var HuevosRancheros = new Plates(
  'HuevosRancheros',
   "Smothered eggs with hashbrowns",
   14.99,
   ["Organic Cage Free Eggs", "Salsa", "Ranch", "Hash Browns"]
)

var Burrito = new Plates(
   'Burrito',
   "Tortilla filled with goodness",
   10.99,
   ["Refried Beans", "Choice of: Steak, Chicken, or Beef", "Cheese"]
)









