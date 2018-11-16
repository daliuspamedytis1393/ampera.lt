// button scroll function

let scrollToTop = document.querySelector("#myBtn");

window.addEventListener("scroll", function() {
  console.log(window.scrollY);
  if (window.scrollY > 60) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

scrollToTop.addEventListener("click", function() {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
});
// background changer with loading bar
$(document).ready(function() {
  var header = $("header");

  var backgrounds = new Array(
    "url(https://png2.kisspng.com/20180130/scq/kisspng-electricity-power-station-electric-power-electrici-construction-route-vector-5a70c5239663e0.981924891517339939616.png)",
    "url(http://farm4.staticflickr.com/3785/12405408174_34876434d0_o.jpg)",
    "url(https://www.thenation.com/wp-content/uploads/2017/05/Schneider-img.jpg)",
    "url(https://www.washingtonpost.com/resizer/0BinRdtEJ731wrewavy5ztrht5Q=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/I53IRXCNLII6RBOBSMTMIUIQGM.jpg)"
  );

  var current = 0;

  function nextBackground() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        if (width === 0) {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width * 1 + "%";
        }
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width * 1 + "%";
      }
    }
    current++;
    current = current % backgrounds.length;
    header.css("background-image", backgrounds[current]);
  }
  setInterval(nextBackground, 3000);

  header.fadeIn("background-image", backgrounds[0]);
});

// scroll nice
$(document).ready(function() {
  var header1 = $("header");

  var backgrounds = new Array(
    "url(https://png2.kisspng.com/20180130/scq/kisspng-electricity-power-station-electric-power-electrici-construction-route-vector-5a70c5239663e0.981924891517339939616.png)",
    "url(http://farm4.staticflickr.com/3785/12405408174_34876434d0_o.jpg)",
    "url(https://www.thenation.com/wp-content/uploads/2017/05/Schneider-img.jpg)",
    "url(https://www.washingtonpost.com/resizer/0BinRdtEJ731wrewavy5ztrht5Q=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/I53IRXCNLII6RBOBSMTMIUIQGM.jpg)"
  );

  var current = 0;

  function nextBackground() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        if (width === 0) {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width * 1 + "%";
        }
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width * 1 + "%";
      }
    }
    current++;
    current = current % backgrounds.length;
    header.css("background-image", backgrounds[current]);
  }
  setInterval(nextBackground, 3000);

  header.fadeIn("background-image", backgrounds[0]);
});
//galery

$(document).ready(function() {
  $("a[href*=#]").bind("click", function(e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top
        },
        600,
        function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
        }
      );

    return false;
  });
});

$(window)
  .scroll(function() {
    var scrollDistance = $(window).scrollTop();

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $(".page-section").each(function(i) {
      if ($(this).position().top <= scrollDistance) {
        $(".navigation a.active").removeClass("active");
        $(".navigation a")
          .eq(i)
          .addClass("active");
      }
    });
  })
  .scroll();
// auto scroll logo
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
//scrollY
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];
window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});
//google maps

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(51.508742, -0.12085),
    zoom: 50
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function initialize() {
  var fenway = { lat: 42.345573, lng: -71.098326 };
  var map = new google.maps.Map(document.getElementById("map"), {
    center: fenway,
    zoom: 14
  });
  var panorama = new google.maps.StreetViewPanorama(
    document.getElementById("pano"),
    {
      position: fenway,
      pov: {
        heading: 34,
        pitch: 10
      }
    }
  );
  map.setStreetView(panorama);
}
