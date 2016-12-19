angular.module("Restaurant", [])
       .controller("StromGuac", Stromcontroller);



function Stromcontroller(){
  var guac = this;
  
  guac.Itemarray = [];
  
  guac.Preference = Dietarypreference;
  
  guac.Chooseplate = function(plate) {
    guac.Itemarray.push(plate);
  }
  
  guac.Choosedrink = function(drink){
    guac.Itemarray.push(drink);
  }  
  
  guac.menu = StromboliGaucamole;
  
  guac.orderlist = orderList;
  
  guac.drinklist = drinkList;
}