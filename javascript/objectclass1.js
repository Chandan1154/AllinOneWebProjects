// const chandan={
//     id:1,
//     name:"schandan",
//     addres:"mysore",
//     marks:100,
//     result:"pass"
// }
// console.log('====================================');
// console.log(chandan.result);
// console.log('====================================');

// let student={
//     id:12,
//     name:"ram",
//     marks:25,
//     result:"fails"
// }
// console.log('====================================');
// console.log(student.result);
// console.log('====================================');

// let arr=[
//     {
//     id:2,
//     name:"chandan"
// },{
//     id:3,
//     name:"ram"
// }
// ]
// console.log('====================================');
// console.log(arr[0].name);
// console.log('====================================');
// console.log('====================================');
// console.log(arr);
// console.log('====================================');
// arr[0].name="sham"
// console.log('====================================');
// console.log(arr[0].name);
// console.log('====================================');

// console.log('====================================');
// console.log(typeof(null));
// console.log('====================================');
// console.log(typeof(arr));



// console.log('====================================');
// console.log('====================================');

//    
// let arr=[13,5,3466,345,"55","35"]
// function print() {
//     arr.map((y)=>{
//         console.log('====================================');
//         console.log(y);
//         console.log('====================================');
//       })
// }
// print()

// function add(params) {
//  console.log( arr.reduce((y,sum)=>y-sum,0))
// }
// add()

// let arr2= arr.filter((w)=> w>=10)
// console.log(arr2)

// let a=[4,9,16,25];
function sqr(num) {
  return Math.sqrt(num);
}
// // console.log(a.map(b=a[0]*a[1]))

let cart=[
  {
    id:1,
    name1:"heyp",
    price:1000,

  },
  {
    id:2,
    name1:"heyp",
    price:2300, 
  }
]
 let res=cart.reduce((sum,x) =>sum+x.price,0)
console.log(res)
let res1=cart.filter((x) =>x.price>=1000)
console.log(res1)
let res2=cart.map((x) =>x.price*2)
console.log(res2)

let sum=0
var e=[10,20,30]
e.forEach(myfun => sum+=e[1] );
console.log(sum);
let a="hello";
console.log(a.indexOf('l'));
