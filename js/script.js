const nav = document.getElementsByClassName("navBar");
const navLinks = document.getElementsByTagName("a");
const pages = document.getElementsByClassName("page") || null;
let page = 0;

window.onload = function(){updateNav()};
window.onscroll = function () {updateNav()};

function updateNav() {
    updatePageNum(window.pageYOffset - 8);
    setNav(page);
}

function updatePageNum(currentPosition){
    let height = pages[0].clientHeight;
    let pageFactor = 0.3; //How much of the next page must be hidden
    page = Math.floor(currentPosition/height + pageFactor);
    updateTitle(page);
}

function updateTitle(page){
    switch(page){
        case 0:{document.title = "Home"; break;}
        case 1:{document.title = "About"; break;}
        case 2:{document.title = "Projects"; break;}
        case 3:{document.title = "Hobbies"; break;}
        case 4:{document.title = "Contact"; break;}
    }
}

function setNav(pageNumber){
    for (let i = 0; i < pages.length - 1; i++){
        if ((pageNumber - 1) === i){
            nav[i].classList.add("navBar-current");
            navLinks[i].classList.add("navBar-current")}
        else {
            nav[i].classList.remove("navBar-current");
            navLinks[i].classList.remove("navBar-current");
        }
    }
}

$(document).ready(function () {
    let scrollTo = $(".scroll");
    scrollTo.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop:$(this.hash).offset().top
        })
    })
});
