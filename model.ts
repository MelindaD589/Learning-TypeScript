let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost: any = 425;
originalCost = "A LOT of money!";

interface InventoryItem {
  displayName: string;
  inventoryType: string;
  trackingNumber: string;
  createDate: Date;
  originalCost: number;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
  return null;
}

function saveInventoryItem(item: InventoryItem) {}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);
