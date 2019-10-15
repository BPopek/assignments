const addForm = document.addForm
const subForm = document.subForm
const mulForm = document.mulForm

addForm.addEventListener('submit', function(){
    event.preventDefault()
    const add1 = addForm.add1.value
    const add2 = addForm.add2.value
    const addNum = parseInt(add1) + parseInt(add2)
console.log(addNum)

document.getElementById('Add Result').textContent = `${add1} + ${add2} = ${addNum}`
})

subForm.addEventListener('submit', function(){
    event.preventDefault()
    const sub1 = subForm.sub1.value
    const sub2 = subForm.sub1.value
    const subNum = parseInt(sub1) - parseInt(sub2)
console.log(subNum)
document.getElementById('Sub Result').textContent = `${sub1} - ${sub2} = ${subNum}`
})

mulForm.addEventListener('submit', function(){
    event.preventDefault()
    const mul1 = mulForm.mul1.value
    const mul2 = mulForm.mul2.value
    const mulNum = parseInt(mul1) * parseInt(mul2)
    console.log(mulNum)

document.getElementById('Mul Result').textContent = `${mul1} x ${mul2} = ${mulNum}`
})

