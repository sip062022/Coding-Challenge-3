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

// Task 3: Employee Performance Tracking Scenario //

let employee = {  // Declares the employee object
    name: "Joe",       // Declares name as "Joe"
    role: "Director",   // Declares role as "Director"
    performanceScore: 96,  // Declares performanceScore as 96
    isActive: true  // Declares isActive as true
};


employee.performanceScore = 100; // Changes perforamceScore from a 96 to a 100

employee.promotionEligible = true; // Adds properly that promotionEligible is true

console.log("Employee Performance Tracker:" ,employee); // Displays updated object

// Task 4: Customer Feedback Records Scenario //

let feedback = [   // Defines the feedback array
    {customerName: "Mary", feedbackText: "Great!", rating: "5 Stars"}, // Defines the first object
    {customerName: "Beth", feedbackText: "Awful!", rating: "1 Star"}, // Defines the second object
    {customerName: "Claire", feedbackText: "Meh!", rating: "3 Stars"}  // Defines the third object
];

let newFeedback = {customerName: "Harry", feedbackText: "Pretty good!", rating: "4 Stars"}; // Defines the new object
feedback.push(newFeedback); // Pushes new object into the array

console.log("Customer Feedback Records:" , feedback); // Displays the compelted array