function makeChristmasTree(line) {
    for(let i = 0; i <= line; i++) {
        let star = '';
        for(let k = 0; k < line - i; k++) {
            star += ' ';
        }
        for(let j = 0; j <= i * 2; j++ ) {
            star += '*';
        }
        console.log(star);
    }
}

makeChristmasTree(5);



// const level = 5;

// for(let i = 1; i <= level; i++) {
//     let tree = '';
//     for(let k = 1; k <= level - i; k++) {
//         tree += ' ';
//     }
//     for(let j = 1; j <= i * 2 - 1; j++) {
//         tree += '*';
//     }
//     console.log(tree);
// }
