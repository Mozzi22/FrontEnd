var size = 7;
var middle = size/2;
//1
var star1 = '';
for (var i=0; i < size; i++) {
// console.log('*' + (' *'.repeat(size - 2)) + ' *');
}
//2
var star2 = '';
for (var i = 1; i <= size; i++) {
  for (var k = 1; k <= size; k++){
    if (k === 1 || k === size || i === 1 || i === size){
      star2 += '* ';
    }else {
      star2 += '  ';
    }
  }
  star2 += '\n';
}
//console.log(star2);
//3 
var star3 = '';
for (var i = 1; i <= size; i++) {
  for (var j = 1; j <= size; j++) {
      if (j === 1 || i === 1 || (j === size + 1 - i) ) {
          star3 += '* ';
      } else {
          star3 += '  ';       
      }
  }
   star3 += '\n';
}
//console.log(star3)
//4
star4 = '';
for (var i = 1; i <= size; i++) {
    for (var j = 1; j <= size; j++) {
        if (j === 1 || i === size || (j === i) ) {
            star4 += '* ';
        } else {
            star4 += '  ';       
        }
    }
    star4 += '\n';
}
//console.log(star4)
// 5. 
star5 = '';
for (var i = 1; i <= size; i++) {
    for (var j = 1; j <= size; j++) {
        if (j === size || i === size || (j === size + 1 - i) ) {
            star5 += '* ';
        } else {
            star5 += '  ';       
        }
    }
    star5 += '\n';
}
//console.log(star5)
//6
star6 = ''; 
for (var i = 1; i <= size; i++) {
    for (var j = 1; j <= size; j++) {
        if (j === size || i === 1 || (j === i)) {
            star6 += '* ';
        } else {
            star6 += '  ';       
        }
    }
    star6 += '\n';
}
//console.log(star6)
// 7. 
star7 = '';
for (var i = 1; i <= size; i++) {
    for (var j = 1; j <= size; j++) {
        if (j === i || (j === size + 1 - i)) {
            star7 += '* ';
        } else {
            star7 += '  ';       
        }
    }
    star7 += '\n';
}
//console.log(star7)
// 8. 
star8 = '';
for (var i = 1; i <= size; i++) {
    for (var j = 1; j <= size; j++) {
        if ( i === 1 || ((j === (size + 1 - i) || (j === i)) && i < middle + 1)) {
            star8 += '* ';     
        } else {
            star8 += '  ';
        }
    }
    star8 += '\n';
}
//console.log(star8)
// 9.
star9 = ''; 
for (var i = 1; i <= size; i++) {
    for (var j = 1; j <= size; j++) {
        if (i === size || ((j === (size + 1 - i) || (j === i)) && i > middle)) {
            star9 += '* ';     
        } else {
            star9 += '  ';
        }
    }
    star9 += '\n';
}
//console.log(star9)