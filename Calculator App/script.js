document.querySelector(".n1").addEventListener("click", displayNum);
document.querySelector(".n2").addEventListener("click", displayNum);
document.querySelector(".n3").addEventListener("click", displayNum);
document.querySelector(".n4").addEventListener("click", displayNum);
document.querySelector(".n5").addEventListener("click", displayNum);
document.querySelector(".n6").addEventListener("click", displayNum);
document.querySelector(".n7").addEventListener("click", displayNum);
document.querySelector(".n8").addEventListener("click", displayNum);
document.querySelector(".n9").addEventListener("click", displayNum);
document.querySelector(".n0").addEventListener("click", displayNum);

document.querySelector(".ndot").addEventListener("click", displayNum);

let cDisplay =  document.querySelector(".cDisplay");
let cDisplayNum = 0;

let sumOn = false;
let minusOn = false;
let multiplyOn = false;
let divideOn = false;

function displayNum(e) {
    cDisplay.innerHTML += e.target.id;
}

function backBtn() {
    let a = cDisplay.textContent;
    if(a) {
        let b = a.slice(0, a.length -1); 
        cDisplay.innerHTML = b;
    }
}

function acBtn() {
    cDisplay.innerHTML = ''
    cDisplayNum = 0;
}

function sumBtn() {
    cDisplayNum = Number(cDisplay.textContent);
    sumOn = true;
    cDisplay.innerHTML = '';
}

function minusBtn() {
    cDisplayNum = Number(cDisplay.textContent);
    minusOn = true;
    cDisplay.innerHTML = '';
}

function multiplyBtn() {
    cDisplayNum = Number(cDisplay.textContent);
    multiplyOn = true;
    cDisplay.innerHTML = '';
}

function divideBtn() {
    cDisplayNum = Number(cDisplay.textContent);
    divideOn = true;
    cDisplay.innerHTML = '';
}

function equalBtn() {
   if(sumOn) {
        cDisplay.innerHTML = cDisplayNum + Number(cDisplay.textContent);
        sumOn = false;
   };

   if(minusOn) {
        cDisplay.innerHTML = cDisplayNum - Number(cDisplay.textContent);
        minusOn = false;
   }

   if(multiplyOn) {
        cDisplay.innerHTML = cDisplayNum * Number(cDisplay.textContent);
        multiplyOn = false;
    }

    if(divideOn) {
        cDisplay.innerHTML = cDisplayNum / Number(cDisplay.textContent);
        divideOn = false;
    }
}