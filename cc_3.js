// Task 1: Product Price Management Scenario // 

let prices = [10, 20, 30, 40, 50]; // Declares the prices array
prices.push(60); // Adds the number 60 to the end of the array
prices.shift(10); // Removes the number 10 from the beginning of the array
console.log("Updated Price List:" , prices); // Displays prices array

// Task 2: Modifying Customer Orders Scenario //

let orders = [1, 2, 3, 4, 5]; // Declares the orders array
orders.splice(2,1, 8) // Increase third order quantity of 3 by 5 to make 8
let total = orders.reduce((sum, orders) => sum + orders, 0); // Adds quantities in the array

console.log("Updated Orders Array:" , orders); // Displays the updated array
console.log("Total Order:" , total); // Displays total sum of order quantities [20]
