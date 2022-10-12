function switchGood () {
    let choice1 = document.getElementById("btn1").checked;
    let choice2 = document.getElementById("btn2").checked;
    let choice3 = document.getElementById("btn3").checked;
    if (choice3 && choice2) {
        if (Math.random() < 0.5) {
            document.getElementById("btn3").checked = false;
        } else {
            document.getElementById("btn2").checked = false;
        }
    }
}
function switchCheap () {
    let choice1 = document.getElementById("btn1").checked;
    let choice2 = document.getElementById("btn2").checked;
    let choice3 = document.getElementById("btn3").checked;
    if (choice1 && choice3) {
        if (Math.random() < 0.5) {
            document.getElementById("btn1").checked = false;
        } else {
            document.getElementById("btn3").checked = false;
        }
    }
}
function switchFast () {
    let choice1 = document.getElementById("btn1").checked;
    let choice2 = document.getElementById("btn2").checked;
    let choice3 = document.getElementById("btn3").checked;
    if (choice1 && choice2) {
        if (Math.random() < 0.5) {
            document.getElementById("btn1").checked = false;
        } else {
            document.getElementById("btn2").checked = false;
        }
    }
}