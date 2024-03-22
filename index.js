#! /usr/bin/env node
import inquirer from "inquirer";
let a = "your value is";
let ans = await inquirer.prompt([
    { message: "Please enter a number", type: "number", name: "First_Number" },
    { message: "Please enter a number", type: "number", name: "Second_Number" },
    { message: "Please enter any operation you want to perform", type: "list", name: "operator", choices: ["add", "subtract", "multiply", "divide"] },
]);
if (ans.operator === "add") {
    let b = ans.First_Number + ans.Second_Number;
    console.log(a + " " + b);
}
else if (ans.operator === "subtract") {
    let b = ans.First_Number - ans.Second_Number;
    console.log(a + " " + b);
}
else if (ans.operator === "multiply") {
    let b = ans.First_Number * ans.Second_Number;
    console.log(a + " " + b);
}
else if (ans.operator === "divide") {
    let b = ans.First_Number / ans.Second_Number;
    console.log(a + " " + b);
}
