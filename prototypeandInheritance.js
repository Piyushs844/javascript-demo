//Problem 1
// function BankAccount(owner,balance){
//     this.owner = owner;
//     this.balance = balance
// }

// BankAccount.prototype.deposite = function(amount){
//     if(amount>0){
//         this.balance += amount
//         console.log(`Deposited ${amount}. New Balance ${this.balance}`)
//     }
//     else{
//         console.log('Give possitive Amount')
//     }
// }

// BankAccount.prototype.withdraw = function(amount){
//     if(amount>0 && amount<=this.balance){
//         this.balance -= amount
//         console.log(`Withdrawl ${amount}. New Balance ${this.balance}`)
//     }
//     else{
//         console.log('Insufficient Balance')
//     }
// }

// const acc1 = new BankAccount('Piyush',2000)
// acc1.deposite(200)
// console.log(acc1)
// acc1.withdraw(590)
// console.log(acc1)


//Problem 2
// function Product(name,price){
//     this.name = name;
//     this.price = price
// }

// Product.prototype.getDetails = function(){
//     return `Product: ${this.name}, Price: ${this.price}`
// }

// function Electronics(name,price,warranty){
//     Product.call(this,name,price);
//     this.warranty = warranty
// }

// Electronics.prototype.getDetails = function() {
//     return `Product: ${this.name}, Price: ${this.price}, Warranty: ${this.warranty} years`;
// };


// const laptop = new Electronics("Laptop", 1200, 2);
// console.log(laptop.getDetails());

//Problem 3

// function vehicle(brand,type){
//     this.brand = brand;
//     this.type = type
// }

// vehicle.prototype.getDetails = function(){
//     return `Vehicle: ${this.brand} and type: ${this.type}`
// }

// vehicle.prototype.rent = function(){
//     return `${this.brand} is rented successfully`
// }

// let car = new vehicle('Hyundai','Hybrid')
// let Bike = new vehicle('Yamaha','Sports')


// console.log(car.getDetails())
// console.log(car.rent())

// console.log(Bike.getDetails())

//Problem 4

// function Employee(name,salary){
//     this.name = name;
//     this.salary = salary
// }

// function manager(Mname,salary){
//     this.managerName = Mname;
//     this,salary = salary
// }

// Employee.prototype.getDetails = function(){
//     return `Employee: ${this.name} and Salary: ${this.salary}`
// }
// manager.prototype.ManageTeam = function(){
//     return `${this.managerName} is Managing the Team`
// }

// let dev = new Employee('Rahul',50000)
// console.log(dev.getDetails())

// let mgr = new manager('Piyush',200000)
// console.log(mgr.ManageTeam())

//problem 5


// function SmartDevice(brand, status) {
//     this.brand = brand;
//     this.status = status;
// }


// SmartDevice.prototype.turnOn = function() {
//     this.status = "on";
//     console.log(`${this.brand} is now ON`);
// };

// SmartDevice.prototype.turnOff = function() {
//     this.status = "off";
//     console.log(`${this.brand} is now OFF`);
// };


// function SmartLight(brand, status) {
//     SmartDevice.call(this, brand, status);
// }

// SmartLight.prototype = Object.create(SmartDevice.prototype);
// SmartLight.prototype.constructor = SmartLight;


// SmartLight.prototype.setBrightness = function(level) {
//     console.log(`${this.brand} brightness set to ${level}`);
// };

// function SmartThermostat(brand, status) {
//     SmartDevice.call(this, brand, status);
// }

// SmartThermostat.prototype = Object.create(SmartDevice.prototype);
// SmartThermostat.prototype.constructor = SmartThermostat;

// SmartThermostat.prototype.setTemperature = function(temp) {
//     console.log(`${this.brand} temperature set to ${temp}°C`);
// };

// const light = new SmartLight("Philips", "off");
// light.turnOn();
// light.setBrightness(75);

// const thermostat = new SmartThermostat("Nest", "off");
// thermostat.turnOn();
// thermostat.setTemperature(22);


//problem 7

// function User(userName,followers){
//     this.userName = userName
//     this.followers =followers
// }

// User.prototype.userlist = function(){
//     console.log(`${this.userName} ${this.followers}`)
// }

// User.prototype.postMessage =  function(message){
//     console.log(`${message}`)

// }
// let user1 = new User('piyush11',783)

// user1.userlist()
// user1.postMessage('hello')