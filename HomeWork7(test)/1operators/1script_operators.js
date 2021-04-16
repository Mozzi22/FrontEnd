// 1.Если а – четное посчитать а*б, иначе а+б
function numberOperation (a, b){
  var res = 0;
  if (a % 2 === 0){
  res = (a * b);
  }
  else {
  res = (a + b);
  }
return res
}
//console.log(numberOperation(1, 3))

// 2.Определить какой четверти принадлежит точка с координатами (х,у)
function coordinates(x, y){
  var res = 0;
  if(x>0&&y>0){
  res = '1 четверть';
  } 
  else if (x<0 && y>0){
  res = '2 четверть';
  } 
  else if (x<0 && y<0){
  res = '3 четверть';
  } 
  else if (x > 0 && y < 0){
  res = '4 четверть';
  } 
  else if (x !== 0 && y == 0){
  res = 'ось Х';
  } 
  else if (x == 0 && y !== 0){
  res = 'ось У';
  } 
  else {
  res = ('Центр координат')
  }
return res
}
//console.log(coordinates(2, 2))// 1 четверть

// 3.Найти суммы только положительных из трех чисел
function sumPositiv (array){
  var res = 0;
  for (var i = 0; i < array.length; i++) {
      if (array[i] > 0) {
          res += array[i];
      }
  }
  return res
}
//console.log(sumPositiv([2, 2, -3])); //4

//4. Посчитать выражение (макс(а*б*с, а+б+с))+3
 function calculateExpression (a, b, c) {
  var multiply = (a * b * c); 
  var sum = (a + b + c);
  return (multiply > sum) ? (multiply + 3) : (sum + 3);
}
console.log(calculateExpression(1,9,1))

/* 5.Написать программу определения оценки студента по его рейтингу, на основе следующих правил
0-19	F
20-39	E
40-59	D
60-74	C
75-89	B
90-100 A */

var res = 0;
function getMark (a){
  if (a <= 19){
  res = "F";
  } else if (a <= 39){
  res = "E";
  } else if (a <= 59){
  res = "D"; 
  } else if (a <= 74){
  res = "C";
  } else if (a <= 89){
  res = "B";
  } else if (a <= 100){
  res = "A";
  }
return (res);
}
//console.log(getMark(77)) //B

module.exports = { numberOperation, coordinates, sumPositiv, calculateExpression, getMark }