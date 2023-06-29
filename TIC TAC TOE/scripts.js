let currentTurn = 'X';
let infoDisplay = document.querySelector(".info");
let gameOn = true;

document.getElementById("one").addEventListener("click", markBoard);
document.getElementById("two").addEventListener("click", markBoard);
document.getElementById("thr").addEventListener("click", markBoard);
document.getElementById("fou").addEventListener("click", markBoard);
document.getElementById("fiv").addEventListener("click", markBoard);
document.getElementById("six").addEventListener("click", markBoard);
document.getElementById("sev").addEventListener("click", markBoard);
document.getElementById("eig").addEventListener("click", markBoard);
document.getElementById("nin").addEventListener("click", markBoard);

function markBoard(e) {
   if(gameOn) {
    e.target.innerHTML = currentTurn;
    checkWinner();
    if(currentTurn == "X") {
        currentTurn = "O";
    } else {
        currentTurn = "X";
    };

    infoDisplayHandler();
   }
}

function infoDisplayHandler() {
    infoDisplay.innerHTML = `Current player is '${currentTurn}'.`;
}

function checkWinner() {
    let one = document.getElementById("one").innerHTML;
    let two = document.getElementById("two").innerHTML;
    let thr = document.getElementById("thr").innerHTML;
    let fou = document.getElementById("fou").innerHTML;
    let fiv = document.getElementById("fiv").innerHTML;
    let six = document.getElementById("six").innerHTML;
    let sev = document.getElementById("sev").innerHTML;
    let eig = document.getElementById("eig").innerHTML;
    let nin = document.getElementById("nin").innerHTML;

    console.log(one, two, thr, fou, fiv, six, sev, eig, nin);

    if(
        //Along rows
        one && one == two && two == thr ||
        fou && fou == fiv && fiv == six ||
        sev && sev == eig && eig == nin ||
        //Along columns
        one && one == fou && fou == sev ||
        two && two == fiv && fiv == eig ||
        thr && thr == six && six == nin ||
        //Along diagonals
        one && one == fiv && fiv == nin ||
        thr && thr == fiv && fiv == sev 
    ) {
        document.querySelector(".winner").innerHTML = ` Congratulations! Winner is '${currentTurn}'. <button class="replayBtn" onclick="replayBtn()">Replay</button>`;
        gameOn = false;
    }

}

function replayBtn(){
    location.reload();
}
