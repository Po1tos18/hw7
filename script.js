// function comparison(a, b){
//     if (a > b){
//         console.log('-1')
//     }else if (b > a){
//         console.log('1')
//     }else{
//         console.log('0')
//     }
// };
// comparison(1, 2);
// ------------------------
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
  
// console.log(factorial(1));
// -------------------------
// function numbers() {
//     let a = prompt('Введите число');
//     let b = prompt('Введите число');
//     let c = prompt('Введите число');
//     return console.log(`${a+b+c}`);
// }
// numbers();
// -------------------------
// function perimeter() {
//     let a = +prompt('Введите длину');
//     let b = +prompt('Введите ширину');
//     if (a == 0 || b == 0){
//         if (a > 0){
//             console.log(`${a**2}`);
//         }else{
//             console.log(`${b**2}`);
//         }
//     }else{
//         console.log(`${b*a}`)
//     }
// };
// perimeter();
// -------------------------
// function perfectNum(number){
//     let temp = 0;
//    for(let i=1;i<=number/2;i++){
//          if(number%i === 0){
//             temp += i;
//         }
//      }
//         if(temp === number && temp !== 0){
//        console.log("Число совершенное");
//         } 
//         else{
//        console.log("Число не совершенное");
//     }   
// } 
// perfectNum(6); 
// -------------------------