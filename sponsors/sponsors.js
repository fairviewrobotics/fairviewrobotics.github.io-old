var Sponsor = function(name, size, url) {
  this.size = size;
  this.name = name;
  this.url = url;
};

var sponsors = [
  new Sponsor("Medtronic", 90, "http://medtronic.com"),
  new Sponsor("Western Digital", 65, "http://www.wdc.com/"),
  new Sponsor("Youth Oppurtunities Program", 25, "https://bouldercolorado.gov/child-youth-family/youth-opportunities-program"),
  new Sponsor("Sword and Stone Productions", 30, ""),
  new Sponsor("MinuteKey", 30, "http://minutekey.com/"),
  new Sponsor("Ball", 30, "http://www.ball.com/aerospace"),
  new Sponsor("Lockheed Martin", 20, "http://www.lockheedmartin.com/"),
  new Sponsor("Hitachi", 20, "http://www.hitachi.us/"),
  new Sponsor("QuickLeft", 20, "https://quickleft.com/"),
  new Sponsor("PizzaRev", 10, "http://pizzarev.com/")
];

$(document).ready(function() {
  for(var i = 0; i < sponsors.length; i++) {
    $("#sponsors-outer").append(
      "<a class='sponsor' href='"+sponsors[i].url+"'><img src='logos/"+sponsors[i].name+".png' style='height: auto; width: "+sponsors[i].size+"vw;'/></a>");
  }
});
