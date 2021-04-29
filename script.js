

function dropdownMenu() {
    var dropdownIcon = document.getElementById("dropdownClick");
    if (dropdownIcon.className === "topnav") {
        dropdownIcon.className += " responsive";
        /*change topnav to topnav.responsive */
    } else {
        dropdownIcon.className = "topnav";
    }
}


const bottomButtonOnSite = document.getElementById("theButton");
bottomButtonOnSite.addEventListener('click',function() {
    alert("You just clicked the button!!");
});


//This should be the home click says "Already Home"

const youAreHome = document.getElementsById('HOME');
youAreHome.addEventListener('click',function() {
    alert("You are already home!!");
});


