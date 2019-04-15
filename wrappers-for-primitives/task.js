"use strict"

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}


function calculateTotalMortgage(percent, contribution, amount, date) {//1 задача доделать

    let date1 = new Date(date);
    let now = new Date();

    let month = ( ( date1.getFullYear() - now.getFullYear() ) * 12 ) + ( date1.getMonth() - now.getMonth() );

    console.log(`Месяцев кредита: ${month}`);

    let totalAmount =  (Number(amount) - Number(contribution)) * ((percent/100/12)+(percent/100/12)/(((1+(percent/100/12))**month)-1)) * month;
    console.log(`Итого будет оплачено:${totalAmount}`);

    return (Math.round(totalAmount * 100) / 100);
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {

	//let new null
    if (typeof(name) == false || typeof(name) == typeof(null) || typeof(name) == typeof(undefined)) {
    	 return ("Привет, мир! Меня зовут Аноним");
    } else {
    	return (`Привет, мир! Меня зовут ${name}`);
    }
    return greeting;
}