function openShowcase(ShowcaseNumber) {
    var i;
    var x = document.getElementsByClassName("Showcase");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(ShowcaseNumber).style.display = "block";  
  }

openShowcase(1);