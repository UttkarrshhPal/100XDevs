let n = 12;
let cnt = 0;

function sum(n){

  for(let i = 1; i <=n; i++){
      cnt+=i;
  }
  return cnt;
}

console.log(sum(n));