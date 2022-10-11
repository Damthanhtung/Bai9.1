
function clickYes () {
    alert("Yes, you are right")
}
function mouseOver () {
    var x = Math.round(Math.random() * window.innerWidth);
    var y = Math.round(Math.random() * window.innerHeight);
    document.getElementById("no").style.left = x + 'px';
    document.getElementById("no").style.top = y + 'px';

}