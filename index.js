
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
    return this.items.reduce((total, items) => total + items.quantity *items.price, 0);
};
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

class TeamMember{
    constructor(name,role,task){
    this.name = name;
    this.role = role;
    this.tasks = tasks}
}
TeamMember.prototype.completeTasks  = function (taskTitle){
    const task = this.tasks.find(t => t.title === tasktitle);
    if(task){
        task.completed = true;
    }
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

class Course{
  constructor(title,instructor,students){
    this.title = title;
    this.instructor = instructor;
    this.students = students;
  }
  updateProgress(studentName,value){
  const student = this.students.find(st => st.name === studentName);
if (student){
  student.progress = value;
}
  }
  async generateCertificate(studentName){
    return new Promise((resolve,reject) =>{

    }
    )
  }
}


// Create a StockTracker class with a property watchlist (array of objects with symbol, threshold, currentPrice). Add a method updatePrice(symbol, newPrice) 
// that updates the stock’s current price. Write an async method checkAlerts() that loops through the watchlist and returns a Promise resolving with a list 
// of stocks where currentPrice >= threshold, or rejecting with "No alerts triggered".
