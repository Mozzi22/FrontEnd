// 1.Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function findSum (max) {
  var sum = 0;
var numbers = 0;
   for (var i = 1; i <= max; i++) {
      if (i % 2 === 0) continue;
          sum += i;
          numbers++
   }
    return {sum, numbers}
}
//console.log(findSum(4))

// 2.Проверить простое ли число?
//  (число называется простым, если оно делится только само на себя и на 1)
function primeNumber(n) {
  for(var i = 2; i < n; i++) {
     if(n % i === 0) return false;
  }
  return n > 1;
 }
//console.log(primeNumber(7)) //true

// 3.Найти корень натурального числа с точностью до целого 
// (рассмотреть вариант последовательного подбора и метод бинарного поиска)
function sqrt(a) {
  for (var i = 0; i <= a; i++) {
      if ( (i * i === a) ||((i * i) < a) && ( ((i+1) * (i+1)) > a) ) {
        return i;
    }
  }
} 
//console.log(sqrt(6))//4 
 
// 4.Вычислить факториал числа n. n! = 1*2*…*n-1*n;
function factorial(n) {
  if (n !== 1){
    return n * factorial(n - 1);
  }else{
    return 1;
}}
//console.log( factorial(10) );//3628800

// 5.Посчитать сумму цифр заданного числа
function calcSum (number) {
  var figures = "" + number
  var sum = 0
  for (var i = 0; i < figures.length; i++) 
    sum += +figures[i]
    return sum
}
//console.log(calcSum(77)) // 14

// 6.Вывести число, которое является зеркальным отображением 
// последовательности цифр заданного числа, например, задано число 123, 
// вывести 321.
function getMirrorNumber (){
var number = 123;
var result = 0;
while (number) {
    result *= 10;
    result += number % 10;
    number = Math.floor(number / 10);
}
}
console.log(getMirrorNumber())//321