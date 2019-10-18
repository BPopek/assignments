const submitItem = document.addItem
const list = document.getElementById("list")
const button = document.getElementsByClassName("button")

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
    crossOffX()

})

function crossOffX() {
    for(let i = 0; i < button.length; i++){
        button[i].addEventListener("click", function(){
            const parent = this.parentElement;
            parent.style.display = "none";
        })
    }
}
crossOffX()