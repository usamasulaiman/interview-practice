'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'foo' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY codeList
 *  2. STRING_ARRAY shoppingCart
 */

function foo(codeList, shoppingCart) {
    // Write your code here
    let tracker = []
    let allString = ''
    let result = new Map()
    for ( let i = 0; i< codeList.length; i++) {
        allString += codeList.reduce((acc, item) => (item === 'anything' ? acc + '.' : acc+item), '');
    }
    // allString += '.';
    const shoppingString = shoppingCart.reduce((acc, item) => acc+item, '')
    tracker = allString.split('.')
    tracker.forEach(item => {
        const found = shoppingCart.split(item)
        if (found.length) {
            result.add(found[0])
        }
    })
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const codeListCount = parseInt(readLine().trim(), 10);

    let codeList = [];

    for (let i = 0; i < codeListCount; i++) {
        const codeListItem = readLine();
        codeList.push(codeListItem);
    }

    const shoppingCartCount = parseInt(readLine().trim(), 10);

    let shoppingCart = [];

    for (let i = 0; i < shoppingCartCount; i++) {
        const shoppingCartItem = readLine();
        shoppingCart.push(shoppingCartItem);
    }

    const result = foo(codeList, shoppingCart);

    ws.write(result + '\n');

    ws.end();
}
