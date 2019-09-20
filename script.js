const nav = document.getElementById("navBar") || null;
const pages = document.getElementsByClassName("page") || null;
let page = 0;

window.onscroll = function () {updateNav()};

function updateNav() {
    let height = pages[1].getBoundingClientRect().top - pages[0].getBoundingClientRect().top;
    let pos = window.pageYOffset - 8;
    // Loop determines which page the viewer is on
    for (let i = 0; i < pages.length; i++){
        if (pos > height*i - height*0.5){page = i}
    }
    console.log(page);
}

