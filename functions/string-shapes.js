function makeLine(size, char = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}

function makeSquare(size, char = '#') {
    let square = '';
    for (let i = 0; i < size - 1; i++) {
        square += makeLine(size, char);
        if (i < size - 2) {
            square += '\n';
        }
    }
    return square;
}

function makeRectangle(width, height, char = '#') {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += makeLine(width, char); 
        if (i < height - 1) {
            rectangle += '\n';
        }
    }
    return rectangle;
}

function makeDownwardStairs(height, char = '#') {
    let downwardStairs ='';
    for (let i = 0; i < height; i++) {
        downwardStairs += makeLine(i+1, char);
        if (i < height - 1) {
            downwardStairs += '\n';
        }
    }
    return downwardStairs;
}
function makeSpaceLine(numSpaces, numChars, char = '#'){
    let str = '';
    let makeSpace = function (){
        for (let i =0; i < numSpaces; i++) {
        str += ' ';
        }
    }
    makeSpace();
    for (let i = 0; i < numChars; i++) {
        str += char;
    }
    makeSpace();
    return str; 
}

function makeIsoscelesTriangle(height, char = '#') {
    let tri = '';
    for (let i = 0; i < height; i++) {
        tri += makeSpaceLine(height - i - 1, 2 * i + 1, char);
        if (i < height - 1) {
            tri += '\n';
        } 
    }
    return tri; 
}

function reverse(str) {
    let lettersArray = str.split('')
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
 }
 

function makeDiamond(height, char = '#'){
    let diamond = makeIsoscelesTriangle(height, char);
    diamond += '\n' + reverse(diamond);
    return diamond;
    
}
 
console.log(makeLine(5, '$')+'\n');
console.log(makeSquare(5, '7')+'\n');
console.log(makeRectangle(5, 3, '+')+'\n');
console.log(makeDownwardStairs(5, '||')+'\n');
console.log(makeSpaceLine(3, 5, '[]')+'\n');
console.log(makeIsoscelesTriangle(5, 'I')+'\n');
console.log(makeDiamond(5, 'O')+'\n');
