// Hehe yes it's empty you have to fill it with your solutions

// 1 STRINGS
// Convert this simple greeting to TypeScript and add proper types.
// let firstName = "Faith";
// let lastName = "Adeyemi";
// let fullName = firstName + " " + lastName;
// console.log("Hello, " + fullName + "!");

// Write your solution below this line
// let firstName: string = "Faith";
// let lastName: string = "Adeyemi";
// let fullName: string = firstName + " " + lastName;
// console.log("Hello, " + fullName + "!");

// 2 NUMBERS
// Add types for the variables and ensure totalPrice is a number.
// let price = 1500;
// let quantity = 3;
// let totalPrice = price * quantity;
// console.log("Total Price:", totalPrice);

// Write your solution below this line
// let price: number = 1500;
// let quantity: number = 3;
// let totalPrice: number = price * quantity;
// console.log("Total Price:", totalPrice);





// 3 BOOLEAN
// Add types for the boolean variable and make it type-safe.
// let isAvailable = true;
// if (isAvailable) {
//   console.log("Item is available for purchase.");
// } else {
//   console.log("Item is out of stock.");
// }


// Write your solution below this line
// let isAvailable: boolean = true;
// if (isAvailable) {
//   console.log("Item is available for purchase.");
// } else {
//   console.log("Item is out of stock.");
// }

// 4 UNION TYPE
// This function should accept either a string or a number as 'id'.
// Add a union type for the parameter and ensure type safety.
// ignore the any type error here
// function printId(id) {
//   console.log("User ID is:", id);
// }
// printId(101);
// printId("abc123");

// Write your solution below this line
// function printId(id: string| number) {
//   console.log("User ID is:", id);
// }
// printId(101);
// printId("abc123");


// 5 ARRAYS
// Convert this to TypeScript using proper array types.
// let studentNames = ["Ada", "Bola", "Chinedu"];
// let scores = [90, 75, 88];
// console.log(studentNames);
// console.log(scores);

// Write your solution below this line
// let studentNames: string[] = ["Ada", "Bola", "Chinedu"];
// let scores = [90, 75, 88];
// console.log(studentNames);
// console.log(scores);



// 6 INTERSECTION TYPE
// Combine two objects into one using intersection types in TypeScript.
// let user = {
//   name: "Emmanuel",
//   email: "emma@example.com",
// };

//  let account = {
//   accountNumber: "AC12345",
//    balance: 5000,};

// // Write your solution below this line



// In TypeScript, you'll create two types (User and Account)
// and then combine them into a single variable called `customer`
// that includes properties from both.
// let customer: {
//     name: string,
//     email: string,
//     accountNumber: string,
//     balance: number
// } = { ...user, ...account };
// console.log(customer);
//type alias
// type User= {name: string,
//     email: string
// }
// type Account = {accountNumber: string,
//     balance: number
// }

// let user: User = {
//     name: "Emmanuel",
//    email: "emma@example.com"
// }
// let account: Account = {
//     accountNumber: "AC12345",
//     balance: 5000
// }
// type Customer = 
//     User & Account;

//     let customer: Customer = {
//         name: user.name,
//         email: user.email,
//         accountNumber: account.accountNumber,
//         balance: account.balance
//     }
//     console.log(customer)

    // tuple is a fixed length array
    // let MyTuple: [string, number, boolean] = ['Alex', 21, false]
    // console.log(MyTuple)
    // let Mixed = ['Alex', 21, true];
    // console.log(Mixed)
    // Mixed = MyTuple;
    // console.log(Mixed)
    
    // Enum type is used for fixd set of values
    //Enum for different type of sizes of shirts
    // enum Sizes {
    //     Small = 's',
    //     Medium = 'm',
    //     Large = 'l',
    //     XtraLarge = 'xl'
    // }
    // let Mysize: Sizes = Sizes.Medium;
    // console.log(Mysize)
    // function CalculateTax(income: number, TaxYear: number): number {
    //     if (TaxYear < 2023) {
    //         return income * 0.12
    //     }
    //     else{return income * 0.14}
        
    // }
    // let MyIncome = 500_000_000;
    // let MyTax: number = CalculateTax(MyIncome, 2024);
    // console.log(MyTax);
    // interface Employee{
    //   readonly id: number;
    //   name: string;
    //   salary: number
    // };
    
    // let employee: Employee = {
    //   id: 1,
    //   name: "Adolphus Micah",
    //   salary: 5_000_000   
    //  }
    //  interface Manager extends Employee{
    //   Department: string;
    //   office: number;
    //  }
    //  let manager: Manager ={
    //   id:34,
    //   name: "Ade",
    //   salary: 300_9000_999,
    //   Department: "Fishery",
    //   office: 98
    //  }

    class Coder {
      name: string;
      music: string;
      age: number;
      language: string;
    
      constructor (
      name: string,
      music: string,
      age: number,
      language: string
      )
      {
        this.name = name,
        this.music = music,
        this.age = age,
        this.language = language}
        public getLang(): string{
          return `${this.name} programs is ${this.language}`
        }
    }
    const Emma = new Coder ('Emma', "hip hop", 18, "Typescript" )
    
     