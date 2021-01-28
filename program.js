function main(input) {
  let n = input;
  if( n == 1 || n==0)
  {
    console.log(n);
    return 1;
  }
  if(check(n) == false)
  {
    console.log(n);
    return 1;
  }
  for(i=2;i<=n;i++)
  {
    if(n%i==0)
    {
      if(check(i)==true)
      {
        console.log(i);
        n/=i;
        i=1;
      }
    }
  }
  return 0;
}

function check(n){
  let count = 0;
  for(let j = 2; j<=Math.sqrt(n);j++)
  {
    if(n%j==0)
    {
      count++;
    }
  }
  return true;
}
module.exports = main;