var Sponsor = function(name, size, url) {
  this.size = size*0.9; // 0.9x is for the outer div's width being 90vw
  this.name = name;
  this.url = url;
};

var sponsors = [
  new Sponsor("Medtronic", 50, "http://medtronic.com"),
  new Sponsor("Ball", 40, "http://www.ball.com/aerospace"),
  new Sponsor("Neya Systems", 30, "http://neyasystems.com/"),
  new Sponsor("Anker", 25, "https://www.anker.com/"),
  new Sponsor("Spire", 30, "https://spire.com/"),
  new Sponsor("Beaujos", 15, "http://www.beaujos.com/"),
  new Sponsor("Cosmos", 15, "http://cosmospizza.com/"),
  new Sponsor("PizzaRev", 10, "http://pizzarev.com/")
];

$(document).ready(function() {
  for(var i = 0; i < sponsors.length; i++) {
    $("#sponsors-outer").append(
      "<a class='sponsor' href='"+sponsors[i].url+"'><img src='logos/"+sponsors[i].name+".png' alt="+sponsors[i].name+" style='height: auto; width: "+sponsors[i].size+"vw;'/></a>");
  }
});
