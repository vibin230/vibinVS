const loadingScreen = document.querySelector(".onLoadScreen");
const welcomeText = document.querySelector(".welcomeText");
const leftTri = document.querySelector(".leftTri");
const rightTri = document.querySelector(".rightTri");
const midTri = document.querySelector(".midTri");
const navbar = document.getElementById("nav");
const homeScreen = document.querySelector(".homeScreen");
const homeButtons = document.querySelector(".btnGroup");
const activeLeftLinks = document.querySelector(".homeDefaultIMG");
const pagesRightTop = document.getElementsByClassName("topColContent");
const pagesRightBottom = document.getElementsByClassName("bottomColContent");
const tabs = document.getElementsByClassName("listItemStyle");
const footer = document.querySelector(".footer");

console.log(homeScreen.classList);
const onloadAnimation = () => {
    return (
        setTimeout(() => {
            welcomeText.classList.add("wtAnimation");
            setTimeout(() => {
                leftTri.classList.add("lrTriAnimation");
                rightTri.classList.add("lrTriAnimation");
                midTri.classList.add("mTriAnimation");
                setTimeout(() => {
                    loadingScreen.classList.add("d-none");
                    homeScreen.classList.remove("d-none");
                    navbar.classList.remove("d-none");
                    footer.classList.remove("d-none");
                    // homeButtons.classList.remove("d-none");
                }, 500)
            }, 1000)
        }, 1000)

    );
}



for(j = 0; j < tabs.length; j++) {
  // attach event listener to all tabs
  tabs[j].addEventListener("click", clickTab)
}

// event listener function
function clickTab (e) {

  var tabID = e.currentTarget.id
  var pageRightID = tabID.replace("t","c")
  var pageLeftID = tabID.replace("t","cl")

  for (i = 0; ((i < pagesRightBottom.length) && (i < pagesRightTop.length)); i++) {
    // deactivate all tabs
    tabs[i].classList.remove("listItemActive")
    activeLeftLinks.classList.remove("active")
    activeLeftLinks.classList.add("d-none")
    // hide all pages
    pagesRightBottom[i].classList.remove("active")
    pagesRightTop[i].classList.remove("active")
  }

  // activate current tab
  e.currentTarget.classList.add("listItemActive")

  // show current page
  var currentRightPage = document.querySelector('#'+pageRightID)
  var currentLeftPage = document.querySelector("#"+pageLeftID)
  currentRightPage.classList.add('active')
  currentLeftPage.classList.add("active")

}

window.onload = onloadAnimation;