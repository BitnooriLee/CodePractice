'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    
    var pair =0;
    var i=0
    var count=0;
     ar.sort();

    for(i=0;i<n; i+=count){
        count =0;
        while(ar[i]==ar[i+count]){
            count++
        }
       pair += Math.floor(count/2) 
    }
    return pair
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);
    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}