// When the user scrolls down 80px from the top of the document, resize the navbar's padding.
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navBar").style.padding = ".5rem 0px";
    } else {
        document.getElementById("navBar").style.padding = "1.5rem 0px";
    }
}