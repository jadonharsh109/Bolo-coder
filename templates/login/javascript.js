const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

// added navbar mobile js
const clearInput = () => {
    const input = document.getElementsByTagName("input")[0];
    input.value = "";
}

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", clearInput);

var barToggle = document.getElementById("bar")
var barToggleIcon = document.getElementById("responsiveBar")
var logoid = document.getElementById("logo")
var iconsid = document.getElementById("icons")
var linkid1 = document.getElementById("link1")
var linkid2 = document.getElementById("link2")
var linkid3 = document.getElementById("link3")
var header = document.getElementById("header")
var home = document.getElementById("home")
var svg = document.getElementById("svg")
var loader = document.getElementById("loader")
barToggle.addEventListener("click", () => {
    if (barToggleIcon.classList.contains('fa-bars-staggered')) {

        barToggleIcon.classList.remove('fa-bars-staggered');
        barToggleIcon.classList.add('fa-xmark');
        logoid.style.opacity = "0";
        iconsid.style.opacity = "1"
        linkid1.style.pointerEvents = "initial"
        linkid2.style.pointerEvents = "initial"
        linkid3.style.pointerEvents = "initial"
    } else {
        barToggleIcon.classList.remove('fa-xmark');
        barToggleIcon.classList.add('fa-bars-staggered');
        logoid.style.opacity = "1";
        linkid1.style.pointerEvents = "none";
        linkid2.style.pointerEvents = "none";
        linkid3.style.pointerEvents = "none";
        iconsid.style.opacity = "0"

    }
})

window.setTimeout(() => {
    header.style.opacity = "1"
    home.style.opacity = "1"
    svg.style.opacity = "1"
    loader.style.display = "none"

}, 3000)

