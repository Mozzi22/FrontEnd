var generateButton = document.querySelector('.generate');
var resetButton = document.querySelector('.reset');
var minNumber = document.querySelector('.min-number');
var maxNumber = document.querySelector('.max-number');
var mainForm = document.querySelector('.form');
var out = document.querySelector('.out');
var lastNumbers = [];
var clickCount = 0;

mainForm.addEventListener('submit', function (e){
    return e.preventDefault();
})

generateButton.addEventListener('click', generateClickHandler);

function generateClickHandler() {
    var minNum = +minNumber.value;
    var maxNum = +maxNumber.value;
    var randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

    if( minNum >= maxNum) {
        return out.textContent = "The min number must be less than the max";
    } else if (!minNum || !maxNum || minNum < 1 || maxNum > 100){
        return out.textContent = "Enter a number in the specified range";
    } else if (!Number.isInteger(minNum) || !Number.isInteger(maxNum)) {
        return out.textContent = "Please enter an integer";
    }
out.textContent = 'Generate number: ' + randomNum

if (clickCount === maxNum - minNum) {
    out.innerHTML = 'Generate number: Elements are over'
    generateButton.disabled = true;
}
if (binarySearch(randomNum, lastNumbers) !== -1){
    return generateClickHandler();
}

clickCount++

if (clickCount) {
    minNumber.readOnly = true;
    maxNumber.readOnly = true;
}

lastNumbers.push(randomNum);
lastNumbers = insertionSort(lastNumbers) ;
}

resetButton.addEventListener('click', function () {
    generateButton.disabled = false;
    clickCount = 0;
    lastNumbers = [];
    minNumber.readOnly = false;
    maxNumber.readOnly = false;
})

function insertionSort(inputArr) {
    var n = inputArr.length;
    for (var i = 0; i < n; i++) {
        var current = inputArr[i]
        var j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
        inputArr[j + 1] = inputArr[j];
        j--
        }
        inputArr[j + 1] = current
    }
    return inputArr
}

function binarySearch(value, list) {
    var first = 0,
        last = list.length - 1,
        position = -1,
        found = false,
        middle = null;

    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2)
        if (list[middle] == value) {
            found = true
            position = middle
        } else if (list[middle] > value) {
        last = middle - 1;
        } else {
        first = middle + 1;
    }
}
    return position;
}