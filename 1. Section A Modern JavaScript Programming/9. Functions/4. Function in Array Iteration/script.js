// Array iteration using forEach

var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];
let printEverything = function(item, i, abc){
    console.log(`Index : ${i} and Item ${item}`);
    console.log(abc);
}

// 1st Parameter : Item
// 2nd Parameter : Index
// 3rd Parameter : Whole Array
foods.forEach(printEverything);