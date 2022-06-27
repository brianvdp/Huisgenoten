$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $(".nav").addClass("sticky");
  } else {
    $(".nav").removeClass("sticky");
  }
});

function openShowcase(ShowcaseNumber) {
  var x = document.getElementsByClassName("Showcase");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  document.getElementById(`showcase${ShowcaseNumber}`).style.display = "block";

  for (let i = 1; i <= x.length; i++) {
    if (i !== ShowcaseNumber) {
      document.getElementById(i).classList.remove("active");
    }
  }
  document.getElementById(ShowcaseNumber).classList.add("active");
}

openShowcase(1);

document.getElementById("active").focus();
