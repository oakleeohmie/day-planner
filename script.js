var today = getHours();
var nineAm = document.getElementById("nine").innerHTML = '';


function getTime() {
    if (today == [9]) {
        nineAm.style.backgroundColor = "red";
    } else if (today < [9]) {
        nineAm.style.backgroundColor = "grey";
    }
    getTime();
};
