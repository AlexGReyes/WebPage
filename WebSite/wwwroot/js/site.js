// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.



function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = -560;
    clearInterval(id);
    id = setInterval(frame, 5);
    var total = (window.innerWidth / 2) - (560 / 2);
    function frame() {
        if (pos == total) {
            clearInterval(id);
        } else {
            pos = pos + 2;
            elem.style.left = pos + "px";
        }
    }
}