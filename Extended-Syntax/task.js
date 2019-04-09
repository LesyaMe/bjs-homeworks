

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){ //первая задача
    let discriminant = Math.pow(b, 2) - 4 * a *c;
    let x = [];
      if (discriminant < 0) {
       console.log('Нет корня');
    return x;
    } else if (discriminant == 0) {
       x.push(( -b + Math.sqrt(discriminant)) / (2 * a));
       console.log(`Один корень ${x}`);
    return x;
    } else {
       x.push(( -b + Math.sqrt(discriminant)) / (2 * a));
       x.push(( -b - Math.sqrt(discriminant)) / (2 * a));
       console.log (discriminant);
       console.log (`Корни: ${x}`);
}
return x;
}

getResult(2,4,3);
   //return x;


function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){ //вторая задача
    let today = new Date();
    //let myBirth = new Date(1234, 08, 28);
    let age = today.getFullYear() - dateOfBirthday.getFullYear();
  
    console.log(`Возраст гостя : ${age}`);
  
  if (age >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  console.log(result)
    return result;
} 
    


function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){ //задача 3
	if (marks.length > 5) {
      marks.length = 5; //укоротить до 5ти элементов
      console.log('Введено больше пяти оценок');
    }

    let result = marks.reduce(function(sum, current) {
      return sum + current;
    }); 
    return 'Средний балл: ' + result / marks.length ;
}
