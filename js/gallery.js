var galleryResetTimeout;
var currentImage = 0;

var Gallery = function(location, amount) {
  this.location = location;
  this.amount = amount;
};

var galleries = {
  comp2017: new Gallery("2017-comp", 20),
  build2017: new Gallery("2017-build", 17),
  comp2016: new Gallery("2016-comp", 26),
  build2016: new Gallery("2016-build", 36),
  bag2016: new Gallery("2016-bag", 30),
  offSeason: new Gallery("off-season", 12)
};

var selectedGal = galleries.comp2017;

var showImage = function(image, state) {
  if(state) {
    $("body").addClass("noscroll");
    $("#image-full-outer").removeClass("non-bootstrap-hidden");
    setTimeout(function() {$(".image-full").attr("src", image);}, 10);
    checkWidth();
  }
  else {
    $("body").removeClass("noscroll");
    setTimeout(function() {$(".image-full").attr("src", "loading.jpg");}, 250);
    $("#image-full-outer").addClass("non-bootstrap-hidden");
  }
};

var incrementImage = function() {
  var src = $(".image-full").attr("src");
  $(".image-full").attr("src", "loading.jpg");
  var firstDigit = src.substr(src.length - 5, 1);
  var secondDigit = src.substr(src.length - 6, 1);
  firstDigit++;
  if(firstDigit === 10) {
    if(secondDigit === "/") {
      secondDigit = 1;
      firstDigit = 0;
    } else {
      secondDigit++;
      firstDigit = 0;
    }
  }

  if(firstDigit + 10*secondDigit > selectedGal.amount) {
    firstDigit = "0";
    secondDigit = "";
  }

  currentImage = (secondDigit + "" + firstDigit).replace("/", "");
  var result = selectedGal.location + "/" + currentImage + ".jpg";
  showImage(result, true);
  checkWidth();
};

var decrementImage = function() {
  var src = $(".image-full").attr("src");
  $(".image-full").attr("src", "loading.jpg");
  var firstDigit = src.substr(src.length - 5, 1);
  var secondDigit = src.substr(src.length - 6, 1);
  firstDigit--;
  if(firstDigit === -1) {
    if(secondDigit === "/") {
      secondDigit = Math.floor(selectedGal.amount/10);
      firstDigit = selectedGal.amount % 10;
    } else if(secondDigit === 1) {
      secondDigit = "";
      firstDigit = 9;
    } else {
      secondDigit--;
      firstDigit = 9;
    }
  }

  if(firstDigit + 10*secondDigit < 0) {
    firstDigit = selectedGal.amount % 10;
    secondDigit = Math.floor(selectedGal.amount/10);
  }

  if(secondDigit === 0) {
    secondDigit = "";
  }

  currentImage = (secondDigit + "" + firstDigit).replace("/", "");
  var result = selectedGal.location + "/" + currentImage + ".jpg";
  showImage(result, true);
  checkWidth();
};

var resetGallery = function() {
  $(".image-thumb-outer").animate({opacity: 0}, 250, function() {
    $(this).remove();
  });
  clearTimeout(galleryResetTimeout);
  currentImage = 0;
  galleryResetTimeout = setTimeout(function() {
    for(i = 0; i <= selectedGal.amount; i++) {
      $("#gallery-content").append(
          '<div class="image-thumb-outer">'
          + '<img class="image-thumb" height="87.5px" width="auto" src="'+selectedGal.location+'/thumbnails/'+i+'.jpg"/>'
        + '</div>');
    }
    $(".image-thumb-outer").on("click", function() {
      showImage($(this).children().attr("src").replace("/thumbnails", ""), true);
    });
  }, 200);
};

var checkWidth = function() {
  var wHeight = window.innerHeight;
  var wWidth = window.innerWidth;
  var iHeight = $(".image-full").height();
  var iWidth = $(".image-full").width();
  if(iWidth >= wWidth*0.9) {
    $(".image-full").addClass("width90");
  }
  if(iHeight >= wHeight*0.9) {
    $(".image-full").removeClass("width90");
  }
};

$(window).resize(function() {
  checkWidth();
});

$(document).ready(function() {
  resetGallery();

  $("#image-full-outer").click(function() {
    showImage("", false);
  });

  $(".image-full").click(function() {
    if($(this).attr("src").search("loading") === -1) {
      window.open($(this).attr("src") ,'_blank');
    }
  });

  $("#image-full-outer > img, #image-full-left, #image-full-right").click(function(event) {
    event.stopPropagation();
  });

  $(".btn-gallery").click(function() {
    $(".btn-gallery").removeClass("selected");
    $(this).addClass("selected");
    resetGallery();
  });

  $(document).keydown(function(e) {
    if(!($("#image-full-outer").hasClass("non-bootstrap-hidden"))) {
      switch(e.which) {
          case 27: // esc
            showImage("", false);
            break;

          case 37: // left
          decrementImage();
          e.preventDefault();
          break;

          case 39: // right
          incrementImage();
          e.preventDefault();
          break;
      }
    }
  });
});
