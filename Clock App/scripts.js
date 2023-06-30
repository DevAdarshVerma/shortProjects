let setTheInterval = setInterval(handleRotator, 1000);

function handleRotator() {
    let timeObject = new Date();

    var hours = timeObject.getHours();
    var minutes = timeObject.getMinutes();
    var seconds = timeObject.getSeconds();

    let hourHandle = document.querySelector(".hourhandle");
    let minHandle = document.querySelector(".minhandle");
    let secHandle = document.querySelector(".sechandle");

    var hourDegrees = ((360 / 12) * hours) + ((30 / 60) * minutes) - 180;
    var minuteDegrees = ((360 / 60) * minutes) - 180;
    var secondDegrees = ((360 / 60) * seconds) - 180;

    secHandle.style.transform = `rotate(${secondDegrees}deg)`;
    minHandle.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHandle.style.transform = `rotate(${hourDegrees}deg)`;

    document.querySelector(".digitalhour").innerHTML = `${hours} : `;
    document.querySelector(".digitalmin").innerHTML = `${minutes} : `;
    document.querySelector(".digitalsec").innerHTML = `${seconds}`;
};