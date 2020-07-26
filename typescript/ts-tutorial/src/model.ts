let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
// let originalCost: number | string = 425;

// to use type which allows the union to act as an alias, but this can be a negative if you don't assign the value (it can get confused)
type Cost = number | string;
let originalCost: Cost = 425;
//to check the type and eliminate possibility of errors
if(typeof originalCost === "number") {
    let cost: number = originalCost;
} else {
    //if not a number then it knows this must be a string
    let x = originalCost;
}


//enums are helpful to limit options, but if only a couple options you can use the pipe as an or like this: inventoryType: "computer" | "furniture";
enum InventoryItemType {
    Computer = "computer", 
    Furniture = "furniture"
}

// this shows how to describe the structure of complex types using bracket/inline. It can be useful but often better to use interfaces

// function getInventoryItem(trackingNumber: string): {
//     displayName: string;
//     inventoryType: string;
//     trackingNumber: string;
//     createDate: Date;
//     originalCost: number;
// } {
//     return null
// }

interface InventoryItem {
    displayName: string;
    // inventoryType: InventoryItemType;
    inventoryType: "computer" | "furniture";
    readonly trackingNumber: string;
    createDate: Date;
    originalCost?: number;
    //to make a property unable to be changed after it is initially defined, use readonly before the property name
    // to make a property optional, add the ? at the end of the property name

    //2 ways to add methods to interfaces. These are both equal methods.
    addNote?(note: string): string;
    addNote1?: (note: string) => string;

}

function getInventoryItem(trackingNumber: string): InventoryItem  {
    return null
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem; 

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);

saveInventoryItem({
    displayName: "MacBook Pro 15 Retina",
    // inventoryType: InventoryItemType.Computer,
    inventoryType: "computer",
    trackingNumber: "MBP123456",
    createDate: new Date(),
});