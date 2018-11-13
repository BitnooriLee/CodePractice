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

// Complete the maximumToys function below.
function maximumToys(prices, k) {
        var i,j,i2,index;
        var count =0 , values = 0;
    
        //Insert sorting 
        for(i=0; i<prices.length; i++){
            var temp = prices[i];
            
            for(j=i-1; j>-1 && prices[j]>temp; j--){
                prices[j+1]=prices[j];
            }
            prices[j+1] = temp;
        }
            
        // count? 
        for(i2=0;i2<prices.length;i2++){
            values += prices[i2];
            if(k<values){ 
                break;
            }
                count++
        }
            return count;
}

            
        

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const prices = readLine().split(' ').map(pricesTemp => parseInt(pricesTemp, 10));

    let result = maximumToys(prices, k);

    ws.write(result + "\n");

    ws.end();
}
