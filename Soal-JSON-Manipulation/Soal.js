// Your tasks are to create functions:

// 1. Find items in the Meeting Room.
// 2. Find all electronic devices.
// 3. Find all the furniture.
// 4. Find all items were purchased on 16 January 2020.
// 5. Find all items with brown color.

// ``

//importing file system library
const fs = require('fs');

//reading file "data.json" using readFileSync function
// var rawData = fs.readFileSync("data.json", "utf8");

//parsing data read to json format
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));

//printing complete data
console.log(data);

function FindItems()
{
  let items = "";
  let result = [];
    
  for (let i = 0; i < data.length; i++)
  {
    if (data[i].placement.name == "Meeting Room")
    {
      items = data[i].name;
      result.push(items);
      // console.log(data[i].name);
    }
  }

  return `Items in the meeting room: ${result}`;
}

console.log(FindItems(data));

function FindElectronics()
{
  let items = "";
  let result = [];
    
  for (let i = 0; i < data.length; i++)
  {
    if (data[i].type == "electronic")
    {
      items = data[i].name;
      result.push(items);
      // console.log(data[i].name);
    }
  }

  return `Electronic devices: ${result}`;
}

console.log(FindElectronics(data));

function FindFurniture()
{
  let items = "";
  let result = [];
    
  for (let i = 0; i < data.length; i++)
  {
    if (data[i].type == "furniture")
    {
      items = data[i].name;
      result.push(items);
      // console.log(data[i].name);
    }
  }

  return `Furniture: ${result}`;
}

console.log(FindFurniture(data));

function PurchasedOn()
{
  let items = "";
  let result = [];

  for (let i = 0; i < data.length; i++)
  {
    if (data[i].purchased_at == "1579107600000" || data[i].purchased_at == "1579132800000")
    {
      items = data[i].name;
      result.push(items);
      return `Items purchased on 16 January 2020: ${result}`;
    }
    else
    {
      return "There were no items purchased on 16 January 2020";
    }
  }
}

console.log(PurchasedOn(data));

function FindBrown()
{
  let items = "";
  let result = [];
    
  for (let i = 0; i < data.length; i++)
  {
    for (let j = 0; j < data[i].tags.length; j++)
    {
      if (data[i].tags[j] == "brown")
      {
        items = data[i].name;
        result.push(items);
        // console.log(data[i].name);
      }
    }
  }

  return `Brown items: ${result}`;
}

console.log(FindBrown(data));

// let convert = 
// items with brown color
