// sections
const body = document.querySelector("body");
const home = document.querySelector("#Home").offsetHeight - 30;
const about = document.querySelector("#About").offsetHeight;
const services = document.querySelector("#Services").offsetHeight;
let portfolio = document.querySelector("#Portfolio").offsetHeight;
if (screen.width < 640 || screen.height < 480) {
    portfolio;
} else {
    portfolio *= 1.25;
}

// btns
const openBtn = document.querySelector("span.e");
const closeBtn = document.querySelector("span.x");
const fixed_btn = document.querySelector(".fixed_button_up");
const btn_callP = document.querySelector(".see_jobs");
const btn_callC = document.querySelector(".call_contact");
const serviceBtn = document.querySelectorAll(".w25 .btn");

// header
const deskHeader = document.querySelector(".header-desktop");
const mobiHeader = document.querySelector(".headerToWork");
const boxMobi = document.querySelector("header.mobile");
const mobiul = document.querySelectorAll(".mobile ul li a");
const deskul = document.querySelectorAll(".desktop ul li a");

const progress = document.querySelectorAll(".skill_lv");
const loader = document.querySelector(".overlay_loading");
const success = document.querySelector("span.callback_success");
const error = document.querySelector("span.callback_error");
const include_path = "http://127.0.0.1:8000/";
// const include_path = 'https://franklinhenrique.com/';

let mobimarked = mobiul[0];
let deskmarked = deskul[0];

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

openBtn.addEventListener("click", () => {
    openBoxMobi(openBtn, closeBtn, boxMobi);
});

closeBtn.addEventListener("click", () => {
    closeBoxMobi(openBtn, closeBtn, boxMobi);
});

// menu Change On Scroll

// scroll
document.addEventListener("scroll", () => {
    const offsetY = window.pageYOffset;

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
        deskul.forEach((value, i) => {
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
        deskul.forEach((value, i) => {
            value.style.color = "white";
            if (value.classList.contains("marked")) {
                value.style.color = "#FFF200";
            } else {
                value.style.fontWeight = "normal";
            }
        });
        let delay = 0;
        setTimeout(() => {
            progress.forEach((value, i) => {
                delay = i;
                setTimeout(() => {
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
        deskul.forEach((value, i) => {
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
        deskul.forEach((value, i) => {
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
        deskul.forEach((value, i) => {
            value.style.color = "white";
            if (value.classList.contains("marked")) {
                value.style.color = "#FFF200";
            } else {
                value.style.fontWeight = "normal";
            }
        });
    }
});

// smoothScrollOnClick
fixed_btn.firstChild.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({
        top: 0,
        behavior: "smooth",
    });
});

btn_callP.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({
        top: home + about + services + 160,
        behavior: "smooth",
    });
});

btn_callC.addEventListener("click", (e) => {
    e.preventDefault();
    window.scroll({
        top: home + about + services + portfolio + 80,
        behavior: "smooth",
    });
});

serviceBtn.forEach((value) => {
    value.addEventListener("click", (event) => {
        event.preventDefault();
        window.scroll({
            top: home + about + services + portfolio + 80,
            behavior: "smooth",
        });
    });
});

mobiul.forEach((value) => {
    value.addEventListener("click", (event) => {
        event.preventDefault();
        const element = event.target;
        // smooth scroll
        if (element == value) {
            const urlLength = value.getAttribute("href").indexOf("#");
            const id = value.getAttribute("href").slice(urlLength);
            if (id == "#Home") {
                window.scroll({
                    top: 0,
                    behavior: "smooth",
                });
                closeBoxMobi(openBtn, closeBtn, boxMobi);
            } else if (id == "#About") {
                window.scroll({
                    top: home,
                    behavior: "smooth",
                });
                closeBoxMobi(openBtn, closeBtn, boxMobi);
            } else if (id == "#Services") {
                window.scroll({
                    top: home + about,
                    behavior: "smooth",
                });
                closeBoxMobi(openBtn, closeBtn, boxMobi);
            } else if (id == "#Portfolio") {
                window.scroll({
                    top: home + about + services + 80,
                    behavior: "smooth",
                });
                closeBoxMobi(openBtn, closeBtn, boxMobi);
            } else if (id == "#Contact") {
                window.scroll({
                    top: home + about + services + portfolio + 40,
                    behavior: "smooth",
                });
                closeBoxMobi(openBtn, closeBtn, boxMobi);
            }
        }
    });
});

deskul.forEach((value) => {
    value.addEventListener("click", (event) => {
        event.preventDefault();
        const element = event.target;
        // smooth scroll
        if (element == value) {
            const urlLength = value.getAttribute("href").indexOf("#");
            const id = value.getAttribute("href").slice(urlLength);
            if (id == "#Home") {
                window.scroll({
                    top: 0,
                    behavior: "smooth",
                });
            } else if (id == "#About") {
                window.scroll({
                    top: home,
                    behavior: "smooth",
                });
            } else if (id == "#Services") {
                window.scroll({
                    top: home + about,
                    behavior: "smooth",
                });
            } else if (id == "#Portfolio") {
                window.scroll({
                    top: home + about + services + 80,
                    behavior: "smooth",
                });
            } else if (id == "#Contact") {
                window.scroll({
                    top: home + about + services + portfolio + 160,
                    behavior: "smooth",
                });
            }
        }
    });
});
