// Scripts

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // console.log(document.body);
    if (document.body.scrollTop > 670 || document.documentElement.scrollTop > 670) {
        document.getElementById("scroll-to-top").style.display = "block";
    } else {
        document.getElementById("scroll-to-top").style.display = "none";
    }
}

var currentYear = new Date().getFullYear();
spanElement = document.getElementById("print-year");
yearNode = document.createTextNode(currentYear);
spanElement.appendChild(yearNode);