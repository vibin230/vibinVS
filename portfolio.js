const loadingScreen = document.querySelector(".onLoadScreen");
const welcomeText = document.querySelector(".welcomeText");
const leftTri = document.querySelector(".leftTri");
const rightTri = document.querySelector(".rightTri");
const midTri = document.querySelector(".midTri");
const navbar = document.querySelector("navbar");
const headerTxt = document.querySelector(".headerTxt");
const homeButtons = document.querySelector(".btnGroup");
const activeLinks = document.querySelector(".homeDefaultIMG");
const pages = document.getElementsByClassName("rightColContent");
const tabs = document.getElementsByClassName("listItemStyle");

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
                    headerTxt.classList.remove("d-none");
                    homeButtons.classList.remove("d-none");
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
  var pageID = tabID.replace("t","c")

  for (i = 0; i < pages.length; i++) {
    // deactivate all tabs
    tabs[i].classList.remove("listItemActive")
    activeLinks.classList.remove("active")
    activeLinks.classList.add("d-none")
    // hide all pages
    pages[i].classList.remove("active")
  }

  // activate current tab
  e.currentTarget.classList.add("listItemActive")

  // show current page
  var currentPage = document.querySelector('#'+pageID)
  currentPage.classList.add('active')

}

window.onload = onloadAnimation;