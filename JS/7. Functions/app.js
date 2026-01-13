
function callculateSquareRoots(a, b, c) {
    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        console.log('No real roots');
    } else if (delta === 0) {
        const x = -b / (2 * a);
        console.log('One real root:', x);
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log('Two real roots:', x1, 'and', x2);
    }
}

callculateSquareRoots(2, 3, -2);
callculateSquareRoots(1, -4, 4);
callculateSquareRoots(1, 2, 3);

function classicalDeclaration() {
    console.log('This is a classical function declaration');
}

const functionExpression = function() {
    console.log('This is a function expression');
};

const arrowFunction = () => {
    console.log('This is an arrow function');
};

function squareOfNumber(n) {
    return n * n;
}

const square = (n) => n * n;

squareOfNumber(5);
square(6);