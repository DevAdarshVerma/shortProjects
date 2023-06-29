function addItem() {
    let newText = document.getElementById("typeField").value;
    if(newText){
            let newDiv = document.createElement("div");
            let newP = document.createElement("p");
            let newDoneBtn = document.createElement("p");
            let newRemoveBtn = document.createElement("p");
    
            newDiv.classList.add('newDiv');
            newP.classList.add('newP', 'newItem');
            newDoneBtn.classList.add('newBtn', 'newItem', 'doneBtn');
            newRemoveBtn.classList.add('newBtn', 'newItem', 'removeBtn');
    
            newDoneBtn.addEventListener('click', clickDone)
            newRemoveBtn.addEventListener('click', clickRemove)
            
            newP.innerText = newText;
            newDoneBtn.innerText = "O";
            newRemoveBtn.innerText = "X";
    
            newDiv.appendChild(newP);
            newDiv.appendChild(newDoneBtn);
            newDiv.appendChild(newRemoveBtn);
    
            document.getElementById("listItems").appendChild(newDiv);
            document.getElementById("typeField").value = "";
    }
}

function clickDone(e) {
    let a = e.target.parentNode.childNodes[0];
    a.classList.add('strikeThrough');
}

function clickRemove(e) {
    let a = e.target.parentNode.remove();
}