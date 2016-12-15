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