// given a string representing a day of the week (Tue), and a number of days after that day (2), return the day of the week that results from the number of days after the given day.

function whatDay(startingDay, numOfDays) {
    const week = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
    const index = week.indexOf(startingDay)
    const finalIndex = index + numOfDays % 7
    return week[finalIndex]
}


console.log(whatDay("Tue", 4))  // => 'Sat'
console.log(whatDay("Sun", 10)) // => 'Wed'



// rob:
// const Sun = 1
// const Mon = 2
// const Tue = 3
// const Wed = 4
// const Thu = 5
// const Fri = 6
// const Sat = 7
// function whatDay(startingDay, numOfDays) {
//     let dayNum = startingDay = numOfDays % 7  //use modulus because it will always be under 7, so no need for a repeat
//     if (dayNum = 1) {
//         return Sun
//     } else if {

//     }
// }

