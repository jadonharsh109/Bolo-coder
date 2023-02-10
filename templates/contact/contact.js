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


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});