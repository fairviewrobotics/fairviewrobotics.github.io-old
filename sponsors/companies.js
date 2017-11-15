var Sponsor = function(name, size, url) {
  this.size = size*0.9; // 0.9x is for the outer div's width being 90vw
  this.name = name;
  this.url = url;
};

var sponsors = [
  new Sponsor("Medtronic", 50, "http://medtronic.com"),
  new Sponsor("McGuckin", 32, "https://www.mcguckin.com/"),
  new Sponsor("Ball", 30, "http://www.ball.com/aerospace"),
  new Sponsor("Google", 32, "https://www.google.com/"),
  new Sponsor("Spire", 25, "https://spire.com/"),
  new Sponsor("Madwire", 20, "https://www.madwire.com/"),
];

$(document).ready(function() {
  for(var i = 0; i < sponsors.length; i++) {
    $("#sponsors-outer").append(
      "<a class='sponsor' href='"+sponsors[i].url+"'><img src='logos-2018/"+sponsors[i].name+".png' alt="+sponsors[i].name+" style='height: auto; width: "+sponsors[i].size+"vw;'/></a>");
  }
});
