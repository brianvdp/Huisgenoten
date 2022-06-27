
const splitText = (selector) => {
  const elem = document.querySelector(selector);
  const text = elem.innerText;
  const chars = text.split("");
  const charsContainer = document.createElement("div");
  const charsArray = [];

  charsContainer.style.position = "relative";
  charsContainer.style.display = "inline-block";

  chars.forEach((char) => {
    const charContainer = document.createElement("div");

    charContainer.style.position = "relative";
    charContainer.style.display = "inline-block";
    charContainer.innerText = char;
    charsContainer.appendChild(charContainer);

    charsArray.push(charContainer);
  });
  // remove current text
  elem.innerHTML = "";
  // append new structure
  elem.appendChild(charsContainer);

  return charsArray;
};

const animate = function (text) {
  const chars = splitText("h1");
  return gsap.from(chars, {
    duration: 0.2,
    y: 100,
    opacity: 0,
    stagger: 0.1,
    delay: 1
  });
};

animate("h1");


var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1)';

  $('.huiskamer').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();