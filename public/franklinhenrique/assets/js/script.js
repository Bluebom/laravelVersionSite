/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/views/franklinhenrique/assets/js/script.js":
/*!**************************************************************!*\
  !*** ./resources/views/franklinhenrique/assets/js/script.js ***!
  \**************************************************************/
/***/ (() => {

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

/***/ }),

/***/ "./resources/views/franklinhenrique/assets/css/style.scss":
/*!****************************************************************!*\
  !*** ./resources/views/franklinhenrique/assets/css/style.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/views/painel/assets/css/style.scss":
/*!******************************************************!*\
  !*** ./resources/views/painel/assets/css/style.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/franklinhenrique/assets/js/script": 0,
/******/ 			"painel/assets/css/style": 0,
/******/ 			"franklinhenrique/assets/css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["painel/assets/css/style","franklinhenrique/assets/css/style"], () => (__webpack_require__("./resources/views/franklinhenrique/assets/js/script.js")))
/******/ 	__webpack_require__.O(undefined, ["painel/assets/css/style","franklinhenrique/assets/css/style"], () => (__webpack_require__("./resources/views/franklinhenrique/assets/css/style.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["painel/assets/css/style","franklinhenrique/assets/css/style"], () => (__webpack_require__("./resources/views/painel/assets/css/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;