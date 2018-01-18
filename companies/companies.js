var Company = function(name, size, url) {
  this.size = size*0.9; // 0.9x is for the outer div's width being 90vw
  this.name = name;
  this.url = url;
};

var companies = [
  new Company("Medtronic", 60, "http://medtronic.com"),
  new Company("BlueCanyon", 30, "http://bluecanyontech.com/"),
  new Company("Google", 40, "https://www.google.com/"),
  new Company("Sketchup", 40, "https://www.sketchup.com/"),
  new Company("Ball", 30, "http://www.ball.com/aerospace"),
  new Company("Cosmos", 20, "http://cosmospizza.com/"),
  new Company("Madwire", 20, "https://www.madwire.com/"),
  new Company("NeyaSystems", 20, "http://neyasystems.com/"),
  new Company("Spire", 20, "https://spire.com/"),
  new Company("NIST", 20, "http://www.nist.gov/"),
  new Company("McGuckin", 20, "https://www.mcguckin.com/"),
  new Company("TheSink", 15, "https://thesink.com/")
];

$(document).ready(function() {
  for(var i = 0; i < companies.length; i++) {
    $("#companies-outer").append(
      "<a class='company' target='_blank' href='"+companies[i].url+"'><img src='logos-2018/"+companies[i].name+".png' alt="+companies[i].name+" style='height: auto; width: "+companies[i].size+"vw;'/></a>");
  }
});
