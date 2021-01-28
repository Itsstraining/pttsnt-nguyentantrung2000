// Add new functions, variables here

function main(a) {
  snt(a);
}

function snt(a)
{
for(let i=2;i<=a;i++)
{
  let count=0;
  while(a%i==0)
  {
    ++count;
    a/=i;
  }

  if(count)
  {
    console.log(i)
    if(count>1)
    {
    console.log("^",a)
    }
    // else 
    // {
    // console.log(i);
    // }
    if(a>i)
    {
      console.log("*");
    }
  }
}
}

// function snt(a) {
//   let count = 0;
//   // for(let m=1;m<=a;m++)
//   // {
//     let i;
//     for (i = 2; i < a; i++) 
//     {
//       if (a % i == 0)
//       {
//         for (let j = 2; j <= Math.sqrt(i); j++)
//         {
//           if (i % j == 0)
//           {
//             count++;
//           }
//         }
//         if (count == 0)
//         {
//           console.log(i)
//           a=a/i;
//           console.log(a)
//         }
//       }
//     }
    
//   // }

// }

module.exports = main;
