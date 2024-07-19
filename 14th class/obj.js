//PROTOTYPE TOPIC OF JS.

// const employee = {

//     calcTex() {
//         console.log("tax rate is 10%");
//     },
//     // calcTex2: function (){
//     //     console.log("tax rate is 100%");
//     // },
// };
// const karanArjun = {

//     salary: 5000,
//     calcTex() {
//         console.log("tax rate is 50%..");
//     }
// };

// const karanArjun1 = {
//     salary: 5000,
// };


// const karanArjun2 = {
//     salary: 5000,
// };


// const karanArjun3 = {
//     salary: 5000,
// };

// const karanArjun4 = {
//     salary: 5000,
// };

// karanArjun.__proto__ = employee;
// karanArjun1.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;


// CLASSES IN JS

//class is program code template(Blue Prints) for creating objects.
// Those objects will have some state (variables )
//  & some behaviours (function) inside it.


//ABOUT CONSTRUCTOR....


// class ToyotaCar {
//     constructor(brand,mileage,speed){
//         console.log("creating new object");
//         this.brand=brand;
//         this.mileage=mileage;
//         this.speed=speed;
//     }
//     start() {
//         console.log("Start the Car");
//     };
//     stop() {
//         console.log("Stop the Car");
//     };
// setBrand(brand) {
//     this.brandName = brand;
// };
// setModel(Model) {
//     this.modelName = Model;
// }
// }
// let fortuner = new ToyotaCar("apna Fortuner",100,120);// here consteuctor id evoke
// console.log(fortuner);
// fortuner.setBrand("fortuner");
// fortuner.setModel(3002)
//  let greendy = new ToyotaCar("new model car",2003,100);
//  console.log(greendy);
// greendy.setModel("apna collage 2003")
// greendy.setBrand("Toyota CAlLra")
// let xli = new ToyotaCar("Toyota Suzki","125",543);
// xli.setBrand("Hi Speed");
// xli.setModel(2024)



// INHERITANCE INN JS 
//inheritance is passing down properties & methodes 
//from parent class to child class.
// class parent{
//     hello(){
//         console.log("hello world nhi bolu jai shree ram bol");
//     }
// }
// class child extends parent{}
// let obj= new child();

// class person{
//     constructor(){
//         this.species="Homo Species"
//     }
//     eat(){
//         console.log("eating");
//     }
//     drink(){
//         console.log("drinking");
//     }
//     sleep(){
//         console.log("sleeping");
//     }
// }
// class engineer extends person{
//     work(){
//         console.log("solve the problems");
//     }
// }

// class Doctor extends person{
//     treat(){
//         console.log("treat the patient of every issues");
//     }
// }

// let shradhaObj= new engineer();
// const nameObj = new person();

// SUPER KEYWORLD
//The super keyword is used to all the constructor
// of its parents class to access the parents properties and methods.


// class person {
//     constructor() {
//         console.log("Enter Parent constructor");
//         this.species = "Homo Species"
//     }
//     eat() {
//         console.log("eating");
//     }
//     drink() {
//         console.log("drinking");
//     }
//     sleep() {
//         console.log("sleeping");
//     }
// }
// class engineer extends person {
//     constructor(branch, name) {
//         console.log("Enter child constructor");
//         super();// to invoke parent class constructor...
//         this.branch = branch;
//         this.name = name;
//         console.log("Enter Exits constructor");
//     }
//     work() {
//         super.eat();
//         super.drink();
//         super.sleep();
//         console.log("solve the problems");
//     }
// }

// let shradhaObj = new engineer("chemical engineer", "Kirshana thakur");

// Practice Qoutions

// let DATA =" some important information of personsal"; 
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data = ", DATA);
//     }

// }
// class Admin extends user{
//     constructor(name,email){
//         super(name,email)
//     }
//     editData(){
//         DATA="Some NEW EDITING value";
//     }
// }
// let student1= new user("Kirshan thakur","kirshan@email.com");
// let student2= new user("sharda","abc@email.com")
// let dost=new user("ashok","giyan")
// let admin1 = new Admin("adminsir","admin@email.com");



//Error Handling

// let a = 5;
// let b = 10;
// console.log("a = ", a);
// console.log("b = ", b);
// console.log("a+b = ", a + b);
// try {
//     console.log("a+b = ", a + c);// error
// } catch (err) {
//     console.log(err);
// }
// console.log("a+b = ", a + b);
// console.log("a+b = ", a + b);
// console.log("a+b = ", a + b);


