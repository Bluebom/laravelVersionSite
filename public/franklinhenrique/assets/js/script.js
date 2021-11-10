/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************************************!*\
  !*** ./resources/views/franklinhenrique/assets/js/script.js ***!
  \**************************************************************/
// sections
var body = document.querySelector("body");
var home = document.querySelector("#Home").offsetHeight - 30;
var about = document.querySelector("#About").offsetHeight;
var services = document.querySelector("#Services").offsetHeight;
var portfolio = document.querySelector("#Portfolio").offsetHeight;

if (screen.width < 640 || screen.height < 480) {
  portfolio;
} else {
  portfolio *= 1.25;
} // btns


var openBtn = document.querySelector("span.e");
var closeBtn = document.querySelector("span.x");
var fixed_btn = document.querySelector(".fixed_button_up");
var btn_callP = document.querySelector(".see_jobs");
var btn_callC = document.querySelector(".call_contact");
var serviceBtn = document.querySelectorAll(".w25 .btn"); // header

var deskHeader = document.querySelector(".header-desktop");
var mobiHeader = document.querySelector(".headerToWork");
var boxMobi = document.querySelector("header.mobile");
var mobiul = document.querySelectorAll(".mobile ul li a");
var deskul = document.querySelectorAll(".desktop ul li a");
var progress = document.querySelectorAll(".skill_lv");
var loader = document.querySelector(".overlay_loading");
var success = document.querySelector("span.callback_success");
var error = document.querySelector("span.callback_error");
var include_path = "http://127.0.0.1:8000/"; // const include_path = 'https://franklinhenrique.com/';

var mobimarked = mobiul[0];
var deskmarked = deskul[0];

function chMarked(previouM, nextM) {
  previouM.classList.remove("marked");
  nextM.classList.add("marked");
}

function openBoxMobi(openbtn, closebtn, boxMobi) {
  openbtn.style.display = "none";
  closebtn.style.display = "inline";
  boxMobi.style.top = "3rem";
}

function closeBoxMobi(openbtn, closebtn, boxMobi) {
  openbtn.style.display = "inline";
  closebtn.style.display = "none";
  boxMobi.style.top = "-110vh";
}

openBtn.addEventListener("click", function () {
  openBoxMobi(openBtn, closeBtn, boxMobi);
});
closeBtn.addEventListener("click", function () {
  closeBoxMobi(openBtn, closeBtn, boxMobi);
}); // menu Change On Scroll
// scroll

document.addEventListener("scroll", function () {
  var offsetY = window.pageYOffset;

  if (offsetY < home) {
    chMarked(mobimarked, mobiul[0]);
    mobimarked = mobiul[0];
    chMarked(deskmarked, deskul[0]);
    deskmarked = deskul[0];
    fixed_btn.style.visibility = "hidden";
    mobiHeader.style.background = "#2B2B2B";
    mobiHeader.style.borderBottom = "3px solid #fff200";
    deskHeader.style.background = "#2B2B2B";
    deskHeader.style.borderBottom = "3px solid #fff200";
    openBtn.style.color = "#FFF";
    closeBtn.style.color = "#FFF";
    deskul.forEach(function (value, i) {
      value.style.color = "white";

      if (value.classList.contains("marked")) {
        value.style.color = "#FFF200";
      } else {
        value.style.fontWeight = "normal";
      }
    });
  } else if (offsetY < home + about - 30) {
    chMarked(mobimarked, mobiul[1]);
    mobimarked = mobiul[1];
    chMarked(deskmarked, deskul[1]);
    deskmarked = deskul[1];
    fixed_btn.style.visibility = "visible";
    deskHeader.style.background = "#2B2B2B";
    deskHeader.style.borderBottom = "3px solid #fff200";
    mobiHeader.style.background = "#2B2B2B";
    mobiHeader.style.borderBottom = "3px solid #fff200";
    openBtn.style.color = "#FFF";
    closeBtn.style.color = "#FFF";
    deskul.forEach(function (value, i) {
      value.style.color = "white";

      if (value.classList.contains("marked")) {
        value.style.color = "#FFF200";
      } else {
        value.style.fontWeight = "normal";
      }
    });
    var delay = 0;
    setTimeout(function () {
      progress.forEach(function (value, i) {
        delay = i;
        setTimeout(function () {
          value.style.width = value.getAttribute("completed") + "%";
          value.style.opacity = "1";
        }, delay * 750);
      });
    }, 1000);
  } else if (offsetY < home + about + services) {
    chMarked(mobimarked, mobiul[2]);
    mobimarked = mobiul[2];
    chMarked(deskmarked, deskul[2]);
    deskmarked = deskul[2];
    fixed_btn.style.visibility = "visible";
    mobiHeader.style.background = "#2B2B2B";
    mobiHeader.style.borderBottom = "3px solid #fff200";
    openBtn.style.color = "#fff";
    closeBtn.style.color = "#fff";
    deskHeader.style.background = "#2B2B2B";
    deskHeader.style.borderBottom = "3px solid #fff200";
    openBtn.style.color = "#FFF";
    closeBtn.style.color = "#FFF";
    deskul.forEach(function (value, i) {
      value.style.color = "white";

      if (value.classList.contains("marked")) {
        value.style.color = "#FFF200";
      } else {
        value.style.fontWeight = "normal";
      }
    });
  } else if (offsetY < home + about + services + portfolio) {
    chMarked(mobimarked, mobiul[3]);
    mobimarked = mobiul[3];
    chMarked(deskmarked, deskul[3]);
    deskmarked = deskul[3];
    fixed_btn.style.visibility = "visible";
    mobiHeader.style.background = "white";
    mobiHeader.style.borderBottom = "3px solid #a9aeb3";
    openBtn.style.color = "#2b2b2b";
    closeBtn.style.color = "#2b2b2b";
    deskHeader.style.background = "white";
    deskHeader.style.borderBottom = "3px solid #a9aeb3";
    deskul.forEach(function (value, i) {
      value.style.color = "#2B2B2B";

      if (value.classList.contains("marked")) {
        value.style.color = "black";
        value.style.fontWeight = "bold";
      }
    });
    openBtn.style.color = "#2B2B2B";
    closeBtn.style.color = "#2B2B2B";
  } else {
    chMarked(mobimarked, mobiul[4]);
    mobimarked = mobiul[4];
    chMarked(deskmarked, deskul[4]);
    deskmarked = deskul[4];
    fixed_btn.style.visibility = "visible";
    mobiHeader.style.background = "#2B2B2B";
    mobiHeader.style.borderBottom = "3px solid #fff200";
    deskHeader.style.background = "#2B2B2B";
    deskHeader.style.borderBottom = "3px solid #fff200";
    openBtn.style.color = "#FFF";
    closeBtn.style.color = "#FFF";
    deskul.forEach(function (value, i) {
      value.style.color = "white";

      if (value.classList.contains("marked")) {
        value.style.color = "#FFF200";
      } else {
        value.style.fontWeight = "normal";
      }
    });
  }
}); // smoothScrollOnClick

fixed_btn.firstChild.addEventListener("click", function (e) {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
});
btn_callP.addEventListener("click", function (e) {
  e.preventDefault();
  window.scroll({
    top: home + about + services + 160,
    behavior: "smooth"
  });
});
btn_callC.addEventListener("click", function (e) {
  e.preventDefault();
  window.scroll({
    top: home + about + services + portfolio + 80,
    behavior: "smooth"
  });
});
serviceBtn.forEach(function (value) {
  value.addEventListener("click", function (event) {
    event.preventDefault();
    window.scroll({
      top: home + about + services + portfolio + 80,
      behavior: "smooth"
    });
  });
});
mobiul.forEach(function (value) {
  value.addEventListener("click", function (event) {
    event.preventDefault();
    var element = event.target; // smooth scroll

    if (element == value) {
      var urlLength = value.getAttribute("href").indexOf("#");
      var id = value.getAttribute("href").slice(urlLength);

      if (id == "#Home") {
        window.scroll({
          top: 0,
          behavior: "smooth"
        });
        closeBoxMobi(openBtn, closeBtn, boxMobi);
      } else if (id == "#About") {
        window.scroll({
          top: home,
          behavior: "smooth"
        });
        closeBoxMobi(openBtn, closeBtn, boxMobi);
      } else if (id == "#Services") {
        window.scroll({
          top: home + about,
          behavior: "smooth"
        });
        closeBoxMobi(openBtn, closeBtn, boxMobi);
      } else if (id == "#Portfolio") {
        window.scroll({
          top: home + about + services + 80,
          behavior: "smooth"
        });
        closeBoxMobi(openBtn, closeBtn, boxMobi);
      } else if (id == "#Contact") {
        window.scroll({
          top: home + about + services + portfolio + 40,
          behavior: "smooth"
        });
        closeBoxMobi(openBtn, closeBtn, boxMobi);
      }
    }
  });
});
deskul.forEach(function (value) {
  value.addEventListener("click", function (event) {
    event.preventDefault();
    var element = event.target; // smooth scroll

    if (element == value) {
      var urlLength = value.getAttribute("href").indexOf("#");
      var id = value.getAttribute("href").slice(urlLength);

      if (id == "#Home") {
        window.scroll({
          top: 0,
          behavior: "smooth"
        });
      } else if (id == "#About") {
        window.scroll({
          top: home,
          behavior: "smooth"
        });
      } else if (id == "#Services") {
        window.scroll({
          top: home + about,
          behavior: "smooth"
        });
      } else if (id == "#Portfolio") {
        window.scroll({
          top: home + about + services + 80,
          behavior: "smooth"
        });
      } else if (id == "#Contact") {
        window.scroll({
          top: home + about + services + portfolio + 160,
          behavior: "smooth"
        });
      }
    }
  });
});
/******/ })()
;