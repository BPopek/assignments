const baddieForm = document.baddieForm
// const gForm = document.baddieForm
// const bForm = document.baddieForm
// const cForm = document.baddieForm


baddieForm.addEventListener('submit', function(){
    event.preventDefault()
        const gTotal = (baddieForm.goombaTotal.value * 5)
        const bTotal = (baddieForm.bobTotal.value * 7)
        const cTotal = (baddieForm.cheepTotal.value * 11)
        const total = parseInt(gTotal) + parseInt(bTotal) + parseInt(cTotal)
console.log(total)

// document.getElementById('baddieTotal').textContent = `${gTotal} + ${bTotal} + ${cTotal}`
document.getElementById('baddieTotal').textContent = `${total} coins`
})
