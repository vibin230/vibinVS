const loadingScreen = document.querySelector(".onLoadScreen");
const welcomeText = document.querySelector(".welcomeText");
const leftTri = document.querySelector(".leftTri");
const rightTri = document.querySelector(".rightTri");
const midTri = document.querySelector(".midTri");
const navbar = document.querySelector(".navbar");
const headerTxt = document.querySelector(".headerTxt");
const homeButtons = document.querySelector(".btnGroup");
var aboutMe = true;
const listAcitve = document.querySelector(".abtMe");

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

const aboutMeactive = () => {
    if(aboutMe==true) aboutMe=false;
    else if (aboutMe == false) aboutMe = true;
    aboutMe ? (listAcitve.classList.add(".listItemActive"), listAcitve.classList.remove(".listItemDefault")): (listAcitve.classList.remove(".listItemActive"), listAcitve.classList.add("listItemDefault"));
}

window.onload = onloadAnimation;