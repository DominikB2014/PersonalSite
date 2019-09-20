const nav = document.getElementsByClassName("navBar");
const pages = document.getElementsByClassName("page") || null;
let page = 0;

window.onload = function(){updateNav()};
window.onscroll = function () {updateNav()};

function updateNav() {
    updatePageNum(window.pageYOffset - 8);
    setNav(page);
    console.log(page);

}

function updatePageNum(currentPosition){
    let height = pages[1].getBoundingClientRect().top - pages[0].getBoundingClientRect().top;
    let pageFactor = 0.3; //How much of the next page must be hidden
    for (let i = 0; i < pages.length; i++){
        if (currentPosition > height*i - height*pageFactor){page = i}
    }
}

function setNav(pageNumber){
    for (let i = 0; i < pages.length; i++){
        if ((pageNumber - 1) === i){nav[i].classList.add("navBar-current")}
        else {nav[i].classList.remove("navBar-current")}
    }
}

