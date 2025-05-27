
// Create a CustomerOrder class with properties: orderId (string), items (array of objects with name, quantity, price), and status (string).
//  Add a method calculateTotal() that returns the total order amount. Write an async method processPayment() that simulates payment with a
//   Promise that resolves after 2 seconds. After calling the method, change the status to "paid" and print a success message.

// Create a class CustomerOrder with orderId,items and status as properties
// Create a method calaculate total inside the class that will calculate the total amount by iterating through
// items and multiplying the items with their prices.
// Create an async method that will simulate payments with a promise and resolve after two seconds.
// Call calculate payment to get total payment.
// call process payment to simulate payment and process status

class CustomerOrder{
    constructor(orderId,items,status){
        this.orderId = orderId;
        this.items = items;
        this.status = status;
    }
    calculateTotal() {
    return this.items.reduce((total, item) => total + item.quantity *item.price, 0);
}
   async processPayment() {
      console.log(`Order ${this.orderId} is  being processed`);
      await new Promise((resolve)=> setTimeout(resolve,2000));
      this.status = "paid";
      crossOriginIsolated.log(`payment successful for ${this.orderId} and is ${this.status}`)
  
}
}
const order = new CustomerOrder(1234,[{name:"Fries",quantity:3,price:250},{name:"Sausages",quantity:3,price:100}])
 console.log("amount:",order.calculateTotal());
 order.processPayment();

// Create a TeamMember class that takes name, role, and an array of tasks (each task is an object with title and completed boolean). 
// Write a prototype method completeTask(taskTitle) that marks a task as completed. Write another method checkProgress() that returns 
// a Promise resolving to "All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tasks array.

// create a class TeamMember with properties name,role and tasks.
// create a method completeTask with property taskTitle.
// Iterate through the tasks and if task title is equal to task title the task will be complete.End the loop.
// Create another method checkprogress and iterate to check if all tasks have been completed to return a Promise
// that resolves else return a promise that rejects.
// call the object with the  class attributes.

class TeamMember{
    constructor(name,role,tasks){
    this.name = name;
    this.role = role;
    this.tasks = tasks}
}
TeamMember.prototype.completeTasks  = function (){
    const task = this.tasks.find(t => t.title === tasktitle);
    if(task)task.completed = true;
}
let checkProgress = new Promise(function(resolve,reject){
    const allCompleted =  this.tasks.forEach(task => {task.completed
    if (allCompleted){
      resolve("All tasks completed");
    }else{
      reject("Tasks incomplete")
    }
    });
});
const  member = new TeamMember("Lee","Doctor",[{title:"discharge patient",completed:true},{title:"Perfotm surgery",completed:true}]);

// Build a Candidate class with properties: name, position, and interviews (array of objects with date, status). Add a method scheduleInterview(date)
//  that pushes a new interview with status "pending". Then write an async function sendConfirmation() that returns a Promise that resolves after 1 second
//   with a message "Interview confirmed with [name]", and log the message.

// create a class Candidate with properties String,position and interviews.
// Interview property is an array of interview objects and each interview object has date and status.
// create a method of schedule interview with  date as a property.
// Create a new interview object with date and status and add the interview object to the interviews array.
// Create an async function send confirmation that will wait for one 
// create a message that sends confirmation
// print the message
// return a promise resolved with the message.
// create the object with the class attributes and call it .

class Candidate{
  constructor(name,position,interviews){
    this.name = name
    this.position = position
    this.interviews = interviews
  }
  scheduleInterview(date){
    this.interviews.push({date:date,status:"pending"})
  }
  async sendConfirmation(){
    return new Promise((resolve)=>{
      setTimeout(() => {
        const message = `Interview scheduled with ${this.name}`
        console.log(message)
        resolve(message)
      },1000)
    })
  }
}
 const candidate = new Candidate("Fiona","Software Engineer")
 candidate.scheduleInterview("2025-09-4")
 candidate.sendConfirmation();

// Design a Course class with properties: title, instructor, and students (array of student objects with name and progress). Add a method 
// updateProgress(studentName, value) that modifies the student’s progress. Create an async method generateCertificate(studentName) that 
// returns a Promise resolving only if the progress is 100, otherwise reject with "Incomplete progress".

// Create a class Course with properties title which is a string,instructor which is a string, and students which is an array of student objects.
// create a method updateprogress with parammeter studentName and value.Iterate through  students and if student name is equals to studentname to set student 
// progress to value.exit the loop.
// create an async method generateCertificate with studentName as its parameter .
// Find the student in students array with the nae that  is in studentName.If the student progress is equal to 100 return a promise that resolves a certificate message
// or else return a promise that rejects with a message.
// Create an object with the class properties and call and print it.

class Course{
  constructor(title,instructor,students){
    this.title = title;
    this.instructor = instructor;
    this.students = students;
  }
 updateProgress(studentName,value){
   const student = this.students.find(st => st.name === studentName);
if (student)
  student.progress = value;
  }
  async generateCertificate(studentName){
       const student = this.student.find(s => s.name === studentName)
    return new Promise((resolve,reject) =>{
      if(student && student.progress === 100){
        resolve(`Certificate generated for ${studentName}`)
      }
      else{
        reject("Progress incomplete");
      }
      
    });
  }
}
const course = new Course("UX Design","Eric",[{name:"Fiona",progress:90},{name:"Jabal",progress:100}]);
course.updateProgress("Jabal",100);
course.generateCertificate("Jabal").then(message => console.log(message))
.catch(error => console.log(error));



// Create a StockTracker class with a property watchlist (array of objects with symbol, threshold, currentPrice). Add a method updatePrice(symbol, newPrice) 
// that updates the stock’s current price. Write an async method checkAlerts() that loops through the watchlist and returns a Promise resolving with a list 
// of stocks where currentPrice >= threshold, or rejecting with "No alerts triggered".

// Create a stockTracker with properties of watchlist,which is an array of objects .
// Each object has symbol,threshold and currentPrice.
// create a method updatePrice with symbol and newprice as Parameters.
// Iterate through the watchlist and for each stock if stock symbol is equals to symbol set the stock currentprice to newrice.
// Exit the loop.
// Create an async method checkAlerts and create an empty list and name it allerts.
// for each stock in stocklist if the stock currentprice  is equal  to the stock threshold add the stock to the alerts list.
// If the alert list  is not empty ,return a promise  that resolves with the alert list or else return a promise that   rejects with a message that no alerts have been triggered.
// create an object with the class attributes and call and print.

class StockTracker {
  constructor(watchlist = []) {
    this.watchlist = watchlist;
  }
  updatePrice(symbol, newPrice) {
    const stock = this.watchlist.find(s => s.symbol === symbol);
    if (stock) {
      stock.currentPrice = newPrice;
    } else {
      throw new Error(`Stock symbol ${symbol} not found in watchlist`);
    }
  }
  async checkAlerts() {
    return new Promise((resolve, reject) => {
      const triggered = this.watchlist.filter(
        s => s.currentPrice >= s.threshold
      );
      if (triggered.length > 0) {
        resolve(triggered);
      } else {
        reject("No alerts triggered");
      }
    });
  }
}
const tracker = new StockTracker([
  { symbol: "ACCDE", threshold: 100, currentPrice: 576},
  { symbol: "BCDG", threshold: 200, currentPrice: 457}
]);
tracker.updatePrice("ACCDE", 345);
tracker.checkAlerts()
  .then(alerts => console.log("Alerts triggered:", alerts))
  .catch(error => console.error(error));










