exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here  
  while(n%2 === 0) { // Cut out all even numbers
    n = n/2;
    primeNumber = n;
  }
  
  let pivot = Math.ceil(Math.sqrt(n));//Factor after even
  let oddNum = 3;
  
  while(oddNum <= pivot) {
    if(n%oddNum === 0 && n/oddNum !== 1) { //Prevent it from returning 1
      n = n/oddNum;
      primeNumber = n;
    }
    
    oddNum = oddNum + 2;
  }

  return primeNumber;
};