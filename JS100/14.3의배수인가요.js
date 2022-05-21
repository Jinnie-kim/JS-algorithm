let number = prompt('원하는 숫자가 뭐냐');

function multipleOf3(number) {
    if(number % 3 === 0) {
        return '짝';
    } else {
        return number;
    }
}

console.log(multipleOf3(number));