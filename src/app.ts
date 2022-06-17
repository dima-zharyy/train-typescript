export {};

/////////////////////////// Task 1 ///////////////////////////

// const button = document.querySelector("button");
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(+input1.value, +input2.value));
// });
/////////////////////////// Task 2 ///////////////////////////

// let age: number;
// age = 50;
// let name: string;
// name = "Max";
// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;
// let callback = (a: number): number => {
//   return 100 + a;
// };

// let anything: any;
// anything = -20;
// anything = "Text";
// anything = {};

// let some: unknown;
// some = "Text";

// let str: string;

// if (typeof some === "string") {
//   str = some;
// }

// let person: [string, number];

// person = ["Max", 21];

// enum Load {
//   LOADING,
//   READY,
// }

// const page = {
//   load: Load.LOADING,
// };

// if (page.load === Load.LOADING) {
//   console.log("Страница загружается");
// }
// if (page.load === Load.READY) {
//   console.log("Страница загружена");
// }

// let variable: string | number;

// let litteralVar: "enable" | "disable";

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }

// type CustomType = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: string;
//     updateAt: string;
//   };
// };

// const page1: CustomType = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: "2021-01-01",
//     updateAt: "2021-05-01",
//   },
// };

// const page2: CustomType = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };

/////////////////////////// Task 4 ///////////////////////////

// class Zhiguli_8 {
//   private needRepair = false;
//   private maxEngineLoad = 3;

//   /**
//    * Заводит двигатель машины если это возможно
//    */
//   private checkEngine() {
//     // Проверяем не сломан ли двигатель
//     if (this.needRepair) {
//       throw new Error("Engine not work");
//     }

//     // Пробуем его завести
//     const engineLoad = Math.floor(Math.random() * this.maxEngineLoad) + 1;
//     if (this.maxEngineLoad === engineLoad) {
//       this.needRepair = true;
//       throw new Error("Engine broken again");
//     }
//   }

//   /**
//    * Завести двигатель
//    */
//   public startEngine() {
//     this.checkEngine();

//     console.log("Ta-ta-ta-ta");
//   }

//   /**
//    * Ремонт двигателя
//    */
//   public repairEngine() {
//     this.needRepair = false;

//     console.log("Engine rebuilt");
//   }
// }

// const auto = new Zhiguli_8();

// try {
//   auto.startEngine();
//   auto.startEngine();
//   auto.startEngine();
//   auto.startEngine();
// } catch (e) {
//   console.log(e);
//   auto.repairEngine();
//   try {
//     auto.startEngine();
//   } catch (error) {
//     console.log(error);
//   }
// }

// class UseStatic {
//   private static count = 0;

//   constructor() {
//     UseStatic.count += 1;
//   }

//   public static itStaticMethod() {
//     console.log("Run static method");
//   }

//   public showCount() {
//     console.log(UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.itStaticMethod();

// class House {
//   private tenants: string[] = [];

//   constructor(protected street: string, public readonly type: string) {}

//   showStreet(): void {
//     console.log("Address: ", this.street);
//   }

//   addTenants(name: string): void {
//     this.tenants.push(name);
//   }

//   showTenants(): void {
//     console.log(this.tenants);
//   }
// }

// class WoodenHouse extends House {
//   constructor(street: string, private hostHouse: string) {
//     super("wood", street);
//   }

//   public showStreet(): void {
//     console.log("Host is: ", this.hostHouse);
//     console.log("Address: ", this.street);
//   }

//   public showHost(): void {
//     console.log(this.hostHouse);
//   }
// }

// const woody = new WoodenHouse("woodster road 15", "Dima");

// woody.showStreet();

// const middle = new House("Middle-earth");
// middle.addTenants("Dima");
// middle.addTenants("Alena");
// middle.addTenants("Olly");
// middle.showTenants();

// const under = new House("Underground");

// const copyMiddle = {
//   showStreet: middle.showStreet,
//   street: "street from Copy",
// };

// middle.showStreet();
// under.showStreet();
// copyMiddle.showStreet();

class UseStatic {
  pri;
}
