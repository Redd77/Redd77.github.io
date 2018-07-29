var interests = document.getElementById("interests");
var education = document.getElementById("education");


//Eliminates height two elements.
setEqualHeight(document, education);
window.onresize = setEqualHeight(interests, education);
window.onscroll = scrollCondition();


function setEqualHeight(element1, element2) {
    "use strict";
    element2.style.height = element1.style.height;
    element1.style.height = element2.style.height;
}

//shows or hides an element
function toggleVisibility(id) {
    if (document.getElementById(id).classList.contains("visible")) {
        hide(id);
        showMore.innerHTML = "<b>Show More<br />▼</b>";
        return;
    }
    show(id);
    showMore.innerHTML = "<b>▲<br />Show Less</b>";
}

function getHeight(id) {
    document.getElementById(id).style.display = "block";
    var height = document.getElementById(id).scrollHeight + "px";
    //document.getElementById(id).style.display = "none";
    return height;
}

function show(id) {
    var height = getHeight(id);
    document.getElementById(id).classList.add("visible");
    document.getElementById(id).style.height = height;
}

function hide(id) {
    var height = getHeight(id);
    window.setTimeout(1);
    document.getElementById(id).style.height = "0";
    window.setTimeout(350);
    document.getElementById(id).classList.remove("visible");
}


function scrollCondition() {
    if (document.body.scrollTop >= 50) {
        document.getElementById("scrollTopButton").style.display = "block";
        return;
    }
    document.getElementById("scrollTopButton").style.display = "none";
}

function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
