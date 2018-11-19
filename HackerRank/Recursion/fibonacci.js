function processData(input) {
    var n = parseInt(input);
    console.log(fibonacci(n));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

function fibonacci(n) {
    let fn_1 = 0;
    let fn = 1;
    if(n<0|| n ===undefined) return null;
    if(n<2) return n;
    for(let i =1; i<n; i++){
        
        let temp = fn;
        fn = fn+fn_1;
        fn_1 = temp;
    }  
    return fn;   
}
       
       
/*const fibonacci = n => {
  let previous = 0;
  let current = 1;
  if (n < 0 || n === undefined) return null;
  if (n < 2) return n;
  for (let i = 1; i < n; i++) {
    let temp = current;
    current = current + previous;
    previous = temp;
  }
  return current;
};
*/
       
    
