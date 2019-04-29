function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = +new Date();
    let clientsBirthday = +new Date(birthday);

    let diff = now - clientsBirthday;

    let millisecondsInYear = 365.25 * 24 * 60 * 60 * 1000;
    let age = diff / millisecondsInYear;

    if (age > 18) {
      return true;
    } else {
      return false;
    }
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №2 писать здесь
    this.sound = animal.sound;
    if (animal === undefined) {
    	return null;
    } else {
    	return sound;
    }
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №3 писать здесь
    if (marks.length > 5) {
      marks.length = 5; //укоротить до 5ти элементов
      console.log('Введено больше пяти оценок');
    }

    let marksArray = [];
    marks.forEach(function(mark){
    	marksArray.push(parseInt(mark));
    });

    
   let marksSum = marksArray.reduce(function(sum, current) {
      return sum + current;
    }, 0); 
    let average = (marksSum /  marksArray.length);
    return Math.round(average);
}