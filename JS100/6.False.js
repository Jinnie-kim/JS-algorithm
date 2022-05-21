let falseArray = [NaN, 1, 0, '', 0, undefined];

for(let i = 0; i < falseArray.length; i++) {
    console.log(!!falseArray[i]);
}

const obj = {a: 1, b: 2};
console.log({...obj});