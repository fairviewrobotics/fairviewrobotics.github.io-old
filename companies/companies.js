var company = function(name, size, url) {
  this.size = size*0.9; // 0.9x is for the outer div's width being 90vw
  this.name = name;
  this.url = url;
};

var companies = [
  new company("Medtronic", 50, "http://medtronic.com"),
  new company("McGuckin", 32, "https://www.mcguckin.com/"),
  new company("Ball", 30, "http://www.ball.com/aerospace"),
  new company("Google", 32, "https://www.google.com/"),
  new company("Spire", 25, "https://spire.com/"),
  new company("Madwire", 20, "https://www.madwire.com/"),
];

$(document).ready(function() {
  for(var i = 0; i < companies.length; i++) {
    $("#companies-outer").append(
      "<a class='company' href='"+companies[i].url+"'><img src='logos-2018/"+companies[i].name+".png' alt="+companies[i].name+" style='height: auto; width: "+companies[i].size+"vw;'/></a>");
  }
});
