// alert("heloo word")
// console.log("hello word")
// console.error ('This is an error')
// console.warn ('This is an warning')

// CHAPTER 1:

// .....................learning varable var,const,let................
//  let

// let age = 30;
// age = 31
// console.log(age)

// let score;
// score=23;
// score=34;
// console.log(score)

// const

// const age =30;
// age = 31;
// console.log(age)

// const score;
// score =23;
// console.log(score)

// ....DATATYPES......
// string ,number, boolean , null, undefined, symbol

// const name = 'malika ';a
// const age = 30;
// const isMarried=true;
// const rating = 4.5;
// const x=null;
// const y = undefined;
// let z;
// console.log(typeof age)


// CHAPTER 2:
// .........operator .........

// 1. Arithmetic operators
// let a=5;
// let b=7;
// console.log("a=",a,"b=",b);
// console.log("a+b=",a+b)
// console.log("a-b=",a-b)
// console.log("a*b=",a*b)
// console.log("a/b=",a/b)
// console.log("a%b=",a%b)
// console.log("a**b=",a**b)
// unary arthematic
// console.log("a++=",a++)
// console.log("a++",a)
// console.log("++a=",++a)
// console.log("a--=",a--)
// console.log("a--",a)
// console.log("--a=",--a)

// 2:Assignment  operator

// let a =5;
// let b= 2;
// a +=4;
// a -=4;
// a *=4;
// a %=4;
// a **=4;
// a /=4;
// console.log("a=",a,"b=",b);
// console.log("a=",a)

// 3:comparision  operator

// let a =5;
// let b= 2;
// console.log("5==2",a==b);
// console.log("5!=2",a!=b)
// console.log("5<=2",a<=b)
// console.log("5>=2",a>=b)
// console.log("5===2",a===b)
// console.log("5!==2",a!==b)
// console.log("5<2",a<b)
// console.log("5>2",a>b)

// 4:logical  operator

// let a =5;
// let b= 2;
// let cond1= a>b;
// let cond2= a===5;
// console.log(cond1&&cond2)
// console.log(cond1||cond2)
// console.log(!cond1)
// console.log(!cond2)


// ...............................condtional statement............................

// if statement
// let age=18;

// if (age>=18)
// {
//     console.log("you can vote")
// }
// if (age<18)
// {
//     console.log("you cannot vote")
//     }

// if else
    // let age=18;

    // if (age>18)
    // {
    //     console.log("you can vote")
    // }
    // else
    // {
    //     console.log("you cannot vote")
    //     }
    
// else if 

// let age=20;

// if (age<18)
// {
//     console.log("junior")
// }
// else if(age>18)
// {
//     console.log("senior")
//     }
//     else{
//         console.log("middle")
//     }

// switch
// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// CHAPTER 3:
// ............................loops....................

// for loop

// for (let i=0; i<=1000; i++)
// {
//     console.log("i love malika and dua")

// }
// sum=0;
// n=prompt("enter your number ")
// for (let i=1; i<=n ; i++)
//     sum=sum+i;
// {
//     console.log(sum)
// }
// while 
// let i=1;
// while (i<=5)
// {
//     console.log("my name is malika")
//     i++;
// }
// do-while loop
// let i=20;
// do 
// {
//     console.log("malika");
//     i++;
// } 
// while(i<=10);

// for of loop 
// let str= "malikaliaqat"
// let lenght=0;
// for (let val of str)
// {
//     console.log("val",val)
//     lenght++;
// }
// console.log("lenght",lenght)
// for in loop
// let product ={
//     name: "shoes",
//     price :34500,
//     color :"red",
//     brand:"ali baga"
    
// };
// for(let key in product){
//     console.log("key= ",key,"value=",product[key])
// }
// let game =45;
// let username =prompt ("enter a numer ")
// while(username!=game)
// {
//     username=prompt("you enter wrong number..plz enter rigth one")
    

// }
// console.log("congratulation you found number")
// ......................................................string..........
// let str="malika"
// console.log(str)
// ..........................ARRAY.........................
// let mark = [1,2,3,4,5,6]
// console.log(mark)
// //  array indeces
// let marks = [32,34,56,78,90]
// console.log(marks[3])
// // array of index
// let marks= [1,2,3,4,5,6]
// for(let i=0 ; i<Array.length ;i++)
// {
//     console.log(marks)
// }
// for(let element of marks)
// {
//     console.log(marks)
// // }
// const str = "malika liaqat is my best friend"

// let obj= {};
// for (let x of str)
// {
//     if (obj[x])
//         {
//     obj[x]+=1
//         }
// else{
//     obj[x]=1
// }    
// }
// console.log(obj)

































