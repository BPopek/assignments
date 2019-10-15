// simplifies a reqular function to one line 


function regularFunction(num){
    // code here 
    return num + 2
}
function regularFunction(num){
    num + 2
    return num += 5
}

const arrowFunction = (num) => num + 2

// if on one line you do not need brackets

const arrowFunction = num  => num + 2

// if only one parameter you do not need ()

// if more than one parameter you need multiple lines and to return the result 
const arrowFunction2 = num => {
    num + 2
    num += 5
    return num
    // without the return it will not run 
}

form.addEventListener('submit', function() => {
    this.style.width = '200px'
})
// will not run because parent is the JS document, no parent set 

console.log(regularFunction(5))
console.log(arrowFunction(4))