const submitItem = document.addItem
const list = document.getElementById("list")
const button = document.getElementsByClassName("button")

// const button = document.getElementsByTagName("button")

submitItem.addEventListener('submit', function(){
    event.preventDefault();
    let newProduct = document.getElementById('title').value;
    const newList = document.createElement("li");

    let newDiv = document.createElement('div');
    let addItem = document.createTextNode(newProduct);
    newDiv.appendChild(addItem)
    newList.appendChild(newDiv)

    let newButton = document.createElement('button');
    let newName = document.createTextNode('edit');
    newButton.appendChild(newName)
    newList.appendChild(newButton)

    let newButtonX = document.createElement('button')
    let xButton = document.createTextNode('X')
    newButtonX.appendChild(xButton)
    newList.appendChild(newButtonX)

    newButtonX.setAttribute("class", "button")
    
    list.appendChild(newList)
})


for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", function(){
        const parent = this.parentElement;
        parent.style.display = "none";
    })
}





// const textItem = document.createTextItem();
// addItem.appendChild(textItem);
// document.getElementById('list').appendChild(addItem);

// ////////////////////
// function newItem(){
//     let li = document.createElement("li");
//     let inputValue = document.getElementById('myInput').nodeValue;
//     let t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === ''){
//         alert("No item entered");
//     } else {
//         document.getElementById('myUL').appendChild(li);
//         }
// }
// document.getElementById('myInput').value = "";

// let span = document.createElement("SPAN");
// let txt = document.createTextNode("u00D7");
// span.className = "close";
// span.appendChild(txt);
// li.appendChild(span);

// for (i = 0; i < close.length; i++){
//     close[i].onclick = function(){
//         let div = this.parentElement;
//         div.style.display = "none";
//     }
// }