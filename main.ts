#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000; // Dollar
let myPin = 2244;

let pinAnswer = await inquirer.prompt(
    [
   {
        name:"pin",
        message: "enter your pin",
        type: "number",
    }
    ]
);
if(pinAnswer.pin === myPin){
    console.log("correct pin code!!!")

let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]
);
if(operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt(
        [
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]
    );
if(amountAns.amount > myBalance){
    console.log("insufficient  balance");
}else {  
   myBalance -= amountAns.amount
   console.log(`your remaining balance is: ${myBalance}`)
}

}else if (operationAns.operation === "check balance"){
    console.log(`your balance is: ${myBalance}`)
}
else if(operationAns.operation === "fast cash"){
    let fastCashAns = await inquirer.prompt(
        [
            {
                name: "fast cash",
                message: "your fast cash amount is",
                type: "list",
                choices: ["2000", "4000", "6000", "8000"] 
            }
        ]
    )
    }else
    {
        console.log(`your fast cash amount is`) 
    }
}
else{
    console.log("incorrect pin number");
}

