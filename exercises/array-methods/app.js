const fruit = ["banana", "apple", "orange", "watermelon"];
    console.log("fruit: ", fruit);
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];
    console.log("vegetables: ", vegetables);
// 1
const poppedVeg = vegetables.pop(3)
    console.log(poppedVeg)
// 2
const poppedFruit = fruit.shift()
    console.log(poppedFruit)
// 3
const index = fruit.indexOf("orange");
    console.log(index)
// 4
fruit.push("1");
    console.log(fruit)
// 5
console.log(vegetables.length)
// 6
vegetables.push("3");
    console.log(vegetables)
// 7
const food = fruit.concat(vegetables);
    console.log(food)
// 8
const foodRemoved = food.splice(4, 2);
    console.log(foodRemoved)
// 9
food.reverse();
    console.log(food)    
// 10
const strJoin = food.join(",");
    console.log(strJoin)