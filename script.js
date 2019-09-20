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
    console.log(height);
    console.log(currentPosition);
    let pageFactor = 0.3; //How much of the next page must be hidden
    for (let i = 0; i < pages.length; i++){
        if (currentPosition > height*i - height*pageFactor){page = i}
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

