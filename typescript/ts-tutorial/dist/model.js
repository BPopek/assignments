var displayName = "Jess's standing desk";
var inventoryType = "furniture";
var trackingNumber = "FD123455";
var createDate = new Date();
var originalCost = 425;
//to check the type and eliminate possibility of errors
if (typeof originalCost === "number") {
    var cost = originalCost;
}
else {
    //if not a number then it knows this must be a string
    var x = originalCost;
}
//enums are helpful to limit options, but if only a couple options you can use the pipe as an or like this: inventoryType: "computer" | "furniture";
var InventoryItemType;
(function (InventoryItemType) {
    InventoryItemType["Computer"] = "computer";
    InventoryItemType["Furniture"] = "furniture";
})(InventoryItemType || (InventoryItemType = {}));
function getInventoryItem(trackingNumber) {
    return null;
}
function saveInventoryItem(item) {
}
var inventoryItem = getInventoryItem(trackingNumber);
var updatedInventoryItem = inventoryItem;
inventoryItem.createDate = new Date();
saveInventoryItem(inventoryItem);
saveInventoryItem({
    displayName: "MacBook Pro 15 Retina",
    // inventoryType: InventoryItemType.Computer,
    inventoryType: "computer",
    trackingNumber: "MBP123456",
    createDate: new Date(),
});
