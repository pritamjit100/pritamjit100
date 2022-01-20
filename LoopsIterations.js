// <!-- Loops and Iteration -->

// <!-- Lev2 -->

// <!-- Write a function in Javascript to print the sum of the first n fibonacci numbers. -->


const num=parseInt(prompt("Enter a number for fibonic series:-"));
let n1=0, n2=1; 
var n3;
for(var i=1; i<= num;i++){
    console.log(n1);  
      n3=n1+n2;
      n1=n2;
      n2=n3      
}