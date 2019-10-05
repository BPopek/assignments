var shopper = {
    apple: "fuji",
    howManyApples: 4,
    needBread: true,
    appleList : function() {
        return this.apple + ", " + this.howManyApples
    },
    groceryCart: ["milk", "bread", "bananas", "brownies"] 
};

console.log(shopper.appleList())