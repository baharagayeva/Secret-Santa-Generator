document.addEventListener("DOMContentLoaded", function () {
  var btnOpen = document.getElementById("btnOpen");
  var btnClose = document.getElementById("btnClose");

  btnOpen.addEventListener("click", function () {
    open();
  });

  btnClose.addEventListener("click", function () {
    close();
  });

  function open() {
    const card = document.getElementById("flip-card-inner");
    card.style.transform = "rotateY(180deg)";

    // Call openEnvelope directly after setting the card rotation
    requestAnimationFrame(openEnvelope);
  }

  function close() {
    const card = document.getElementById("flip-card-inner");
    card.style.transform = "rotateY(0deg)";

    const cardMain = document.getElementById("flip-card");
    cardMain.style.transform = "rotate(0deg)";

    // Reset any other styles or elements that need to be adjusted when closing
  }

  function openEnvelope() {
    rotateEnvelope();
    requestAnimationFrame(letterUp);
  }

  function rotateEnvelope() {
    document.getElementById("one").style.transform = "rotate(180deg)";
    document.getElementById("companyName").style.display = "none";
  }

  function letterUp() {
    const letter = document.getElementById("letter");
    const one = document.getElementById("one");

    one.style.zIndex = 1;
    letter.style.zIndex = 2;

    let i = 0;

    function animateLetterUp() {
      if (i <= 500) {
        letter.style.top = -i + "px";
        i += 8; // Adjust the step size as needed
        requestAnimationFrame(animateLetterUp);
      } else {
        setTimeout(letterDown, 0);
      }
    }

    animateLetterUp();
  }

  function letterDown() {
    const letter = document.getElementById("letter");
    const card = document.getElementById("flip-card");

    letter.style.top = -500 + "px";
    letter.style.zIndex = 4;

    let i = 0;

    function animateLetterDown() {
      if (i <= 100) {
        letter.style.top = -400 + i * 5 + "px";
        letter.style.transform = "rotate(" + -i / 18 + "deg)";
        card.style.transform = "rotate(" + i / 18 + "deg)";
        i += 2; // Adjust the step size as needed
        requestAnimationFrame(animateLetterDown);
      } else {
        setTimeout(() => {
          const popUp = document.getElementById("popUp");
          popUp.style.display = "block";
          popUp.style.zIndex = 5;
        }, 0);
      }
    }

    animateLetterDown();
  }
});
