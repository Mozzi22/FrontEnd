// 1
function getCookingTime (eggsAmount) {
  var result = 5;
  var eggs = Math.ceil(eggsAmount/5);
    if (eggsAmount.length <=5){
      return result;
    } else {
      return eggs * 5;
    }
}
// console.log(getCookingTime(0)); //returns 0
// console.log(getCookingTime(5)); //returns 5
// console.log(getCookingTime(9)); //returns 10 (because capacity is 5 so we need to do it 2 times)
// console.log(getCookingTime(44));//returns 45
// 2
function getNumber (array) {
  var arr1 =[];
  var arr2 =[];
  for (var i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0){
        arr1.push(array[i]);
      } else {
        arr2.push(array[i]);
      }     
  } if (arr1.length > arr2.length){
      return arr2;
  } else {
    return arr1;
  }
}
// console.log(getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17])) //returns 4
// console.log(getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12])) //returns 13
// 3
function findTitle(array, string) { 
  var result = [];
  for (var i = 0; i < array.length; i++) {
      if (!array[i].title) {
          continue;
      } 
      if (array[i].title.toLowerCase().includes(string)) {
          result.push(array[i]);
      }
  }
  return result;
}
let arr = [{
  title: 'Some title1'
  }, {
  title: 'I like JS'
  }, {
  user: 'This obj doesn\’t have key title js'
  }, {
  title: 'Js - is the best!'
  }];
console.log(findTitle(arr, 'js')); // return [{ title: 'I like JS'}, { title: 'Js - is the best!' }]
// 4
function countCharacters(string) {
  var result = {};
  for (var i = 0; i < string.length; i++) {
      if (result[string[i]]) {
          result[string[i]]++
      } else {
          result[string[i]] = 1;
      }
  }
  return result;
}
console.log(countCharacters('sparrow')) // should return {s: 1, p: 1, a: 1, r: 2, o: 1, w: 1}
console.log(countCharacters('aabcddeffge')) // should return {a: 2, b: 1, c: 1, d: 2, e: 2, f: 2, g: 1}
//console.log(countCharacters('a 2ab !d')) // should return {a: 2, b:1, d:1, 2:1}
// 5
function getNextPalindrome(number) {
  function isPalidrome(num) {
      var numTostring = num.toString()
      var reversNum = ''
          for (var i = numTostring.length - 1; i >= 0; i--) {
      reversNum += numTostring[i]
      }
          return numTostring === reversNum
  }
      for (var i = number + 1; i < Infinity; i++) {
          if (isPalidrome(i) && i > 10) return i
  }
}
  // console.log(getNextPalindrome(7)) // returns 11
  // console.log(getNextPalindrome(99)) //returns 101
  // console.log(getNextPalindrome(132)) // returns 141
  // console.log(getNextPalindrome(888)) // returns 898
  // console.log(getNextPalindrome(999)) // returns 1001