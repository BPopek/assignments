const info = document.info
info.addEventListener("submit", function(e){
    event.preventDefault()
    const firstName = info.firstName.value
    const lastName = info.lastName.value
    const myAge = info.myAge.value
    const myGender = info.gender.value
    const myDestination = info.destination.value
    const diet = info.diet
    const myDietArr = []
        for(let i = 0; i < diet.length; i++){
            if(diet[i].checked){
                myDietArr.push(diet[i].value)
            }
        }
// console.log(firstName.value)
// console.log(lastName.value)
// console.log(myAge.value)
// console.log(myGender.value)
// console.log(myDestination.value)
// console.log(myDietArr)

alert(
    `
    First name: ${firstName}
    Last name: ${lastName}
    Age: ${myAge}
    Gender: ${myGender}
    Location: ${myDestination}
    Dietary Restrictions: ${myDietArr.join(', ')}
    `)
})