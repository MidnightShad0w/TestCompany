menu.onclick = function () {
    let i = document.getElementById('myTopnav');

    if (i.className === "topnav") {
        i.className += " responsive";
    } else {
        i.className = "topnav";
    }
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function (scroll) {
        scroll.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

window.onscroll = function showheader() {
    var header = document.querySelector('.header');

    if (window.pageYOffset > 90) {
        header.className += " header__fixed";
    } else {
        header.className = "header";
    }
}