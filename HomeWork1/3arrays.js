// 1.Найти минимальный элемент массива
function getMinEl (arr){
  var arr = [7, 1, 22, 1, 102, 0];
  var min = arr[0];
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] < min) {
      min = arr[k];
    }
  }
  return min;
}
//console.log(getMinEl(arr));//0

// 2.Найти максимальный элемент массива
function getMaxEl (arr){
  var arr = [7, 1, 22, 1, 102, 0];
  var max = arr[0];
  for (var k = 1; k < arr.length; k++) {
    if (arr[k] > max) {
      max = arr[k];
    }
  }
  return max;
}
//console.log(getMaxEl(arr));//102

// 3.Найти индекс минимального элемента массива
function getMinIndex(arr){
  var arr = [7, 1, 22, 1, 102, 0];
  var min = arr[0];
  var minIndex = 0;
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] < min) {
      min = arr[k];
      minIndex = k;
    }
  }
  return minIndex;
}
//console.log(getMinIndex(arr))//5

// 4.Найти индекс максимального элемента массива 
function getMaxIndex(arr){
  var arr = [7, 1, 22, 1, 102, 0];
  var max = arr[0];
  var maxIndex = 0;
  for (var k = 0; k < arr.length; k++) {
    if (arr[k] > max) {
      max = arr[k];
      maxIndex = k;
    }
  }
  return maxIndex;
}
//console.log(getMaxIndex(arr))//4

// 5.Посчитать сумму элементов массива с нечетными индексами
var arr = [7, 1, 22, 1, 102, 0];
function sumEvens(arr) {
  var sum = 0;
  for (var k = 0; k < arr.length; k++) {
    if (k % 2 !== 0){
      sum +=arr[k];
    }
  } 
  return sum;
}
//console.log(sumEvens(arr))

// 6.Сделать реверс массива (массив в обратном направлении)
var arr = [7, 1, 22, 1, 102, 0];
function reverse(arr) {
  res = [];
  arr.forEach(element => {
    res.unshift(element);  
  });  
  return res;
}
//console.log(reverse(arr));

// 7.Посчитать количество нечетных элементов массива
var arr = [7, 1, 22, 1, 102, 0];
function sumEvens(arr) {
  var sum = [];
  for (var k = 0; k < arr.length; k++) {
    if (k % 2 === 0){
      sum.push(arr[k]);
    }
  } 
  return sum.length;
}
//console.log(sumEvens(arr))

// 8.Поменять местами первую и вторую половину массива, например, для массива 
// 1 2 3 4, результат 3 4 1 2
function changeHalves(arr){
  var arr = [1, 2, 3, 4];
  var hlen = arr.length /2;
  var cpos = hlen + arr.length % 2;
  for (var i = 0; i < hlen; i++) {
    var t = arr[i];
    arr[i] = arr[cpos + i];
    arr[cpos + i] = t;
  }
  return arr
}
//console.log(changeHalves(arr));

// Отсортировать массив (пузырьком (Bubble), выбором (Select),
//  вставками (Insert))

function bubble(arr) {
  for (var j = 0; j < arr.length - 1; j++){
    var wasSwap = false
    for (var i = 0; i < arr.length - 1 - j; i++){
      if (arr[i] > arr[i + 1]){
        var swap = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = swap;
        wasSwap = true
      }
    }
    if (!wasSwap) break
  }
   return arr
}
//console.log(bubble([7, 1, 22, 1, 102, 0]))
function select(arr){
  for(var i = 0; i <arr.length; i++){
    var min = arr[i];
    var index = i;
      for( var j = i + 1; j <arr.length; j++){
        if(min > arr[j]){
          min = arr[j];
          index = j;
        }
      }
      if(index !== i){
        arr[index] = arr[i]
        arr[i] = min;
      }
  }
  return arr
}
//console.log(select([7, 1, 22, 1, 102, 0]))

function insert(arr) {
  for (var i = 1; i < arr.length; i++) {
    var current = arr[i]
    for (var k = i; k > 0 && arr[k - 1] > current; k--) { 
      count++
      arr[k] = arr[k - 1]
    }
    arr[k] = current  
  }
  return arr
}
//console.log(insert([7, 1, 22, 1, 102, 0]))