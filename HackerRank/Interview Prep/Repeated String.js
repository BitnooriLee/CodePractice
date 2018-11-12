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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    var repeat = Math.floor(n/s.length);
    var checkpoint = n % s.length
    var i ;
    var numA = 0;
    var addnumA=0;
    
    for(i=0;i<s.length; i++) {
        if(s.charAt(i)=="a"){
        numA++ 
        }
        if(i==checkpoint-1){
         addnumA=numA;
        }
    }
    return (numA*repeat + addnumA);   
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
