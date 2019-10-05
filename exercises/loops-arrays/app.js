var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
count = 0
for (let i = 0; i < officeItems.length; i++) {
    if(officeItems[i] == "computer")
        count++ && console.log(count)
    }

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
    name: "Mike",
    age: 12,
    gender: "male"
    },{
    name: "Madeline",
    age: 80,
    gender: "female"
    },{
    name: "Cheryl",
    age: 22,
    gender: "female"
    },{
    name: "Sam",
    age: 30,
    gender: "male"
    },{
    name: "Suzy",
    age: 4,
    gender: "female"
    }
] 
for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log("old enough")
    } else {
        console.log("not old enough")
}

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++)
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max." )
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max.")
}

for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "him"
    } else { peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "her"
    }
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max, don't let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max, let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in.")
}
}

var button = [1, 1, 1, 1, 3]
var sum = 0
    for (let i = 0; i  < button.length; i++) {
        sum += button[i];
        console.log(sum)
        if(sum % 2 === 0) {
            console.log("the light is off")
        } else {
            console.log("the light is on")
        }
    }
    