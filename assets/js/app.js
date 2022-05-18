let number = Math.random();

number = number * 100;

number = Math.floor(number) + 1;

console.log(number);

let attempt = 10;

function start(){

    userVariant = inputVariant.value;

    if (attempt == 0){
        messagePlace.innerHTML = `Спроби закінчились! Ви програли! Правильне число ${number}`;
        return;
    }

    if(userVariant == number){

        messagePlace.innerHTML = 'Вітаю!!! Ви виграли!';

        return;

    }else if(userVariant > number){

        messagePlace.innerHTML = `Ваш варіант: ${userVariant} - більше мого числа`;
                
    }else {

        messagePlace.innerHTML = `Ваш варіант: ${userVariant} - менше мого числа`;
    }

    attempt--;

    attemptPlace.innerHTML = attempt;
    
}


