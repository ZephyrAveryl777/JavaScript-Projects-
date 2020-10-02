var countDownDate = new Date(
    "Jan 5, 2021 15:37:25"
).getTime(); /* event started date and time  */
var last = "00:00:00:00";

var x = setInterval(() => {
    var now = new Date().getTime(); /* now date and time */

    var TimeDifference = countDownDate - now;

    var days = Math.floor(TimeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((TimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((TimeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((TimeDifference % (1000 * 60)) / 1000);

    var nowOn = ("0" + days).slice(-2) +
        ":" +
        ("0" + hours).slice(-2) +
        ":" +
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);

    console.log(last + " " + nowOn);
    animateTime(last, nowOn);
    last = nowOn;

    if (TimeDifference < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

function animateTime(last, nowOn) {
    for (var i = 0; i < nowOn.length; i++) {
        if (last[i] != nowOn[i]) {
            animate(i, nowOn[i]);
        }
    }
}

function animate(index, number) {
    var element = document.getElementsByClassName("number")[index];
    var second = element.lastElementChild.cloneNode(true);
    second.innerHTML = number;
    element.appendChild(second);
    element.classList.add("move");
    setTimeout(() => {
        element.classList.remove("move");
    }, 500);
    setTimeout(() => {
        element.removeChild(element.firstElementChild);
    }, 500);
}