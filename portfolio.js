const loadingScreen = document.querySelector(".onLoadScreen");
const welcomeText = document.querySelector(".welcomeText");
const leftTri = document.querySelector(".leftTri");
const rightTri = document.querySelector(".rightTri");
const midTri = document.querySelector(".midTri");
const navbar = document.querySelector(".navbar");

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
                }, 500)
            }, 1000)
        }, 1000)

    );
}

window.onload = onloadAnimation;