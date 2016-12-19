angular.module("Restaurant", [])
       .controller("StromGuac", Stromcontroller);



function Stromcontroller(){
  var guac = this;
  window.guac = guac
  guac.Itemarray = [];
  
  guac.Preference = Dietarypreference;
  
  guac.Addplate = function(plateorder) {
    console.log("adding plate")
    guac.Itemarray.push(plateorder);
    
  }
  
  guac.Adddrink = function(drinkorder){
    console.log("adding drink")
    guac.Itemarray.push(drinkorder);
  }  
  
  guac.menu = StromboliGaucamole;
  
  guac.orderlist = orderList;
  
  guac.drinklist = drinkList;
}