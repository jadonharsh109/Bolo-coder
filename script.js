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
barToggle.addEventListener("click", () => {
    if (barToggleIcon.classList.contains('fa-bars-staggered')) {

        barToggleIcon.classList.remove('fa-bars-staggered');
        barToggleIcon.classList.add('fa-xmark');
        logoid.style.opacity = "0";
        iconsid.style.opacity = "1"
    } else {
        barToggleIcon.classList.remove('fa-xmark');
        barToggleIcon.classList.add('fa-bars-staggered');
        logoid.style.opacity = "1";
        iconsid.style.opacity = "0"

    }
})
