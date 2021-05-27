var IList = require("./IList");

var LList = function () {
    this.size = 0;
    this.root = null;
    this.Node = function (value) {
        this.value = value;
        this.next = null;
    }
};

LList.prototype = Object.create(IList.prototype);
LList.prototype.constructor = LList;

LList.prototype.clear = function () {
    this.size = 0;
    this.root = null;
};
LList.prototype.getSize = function () {
    return this.size;
};
LList.prototype.add = function (value) {
    var newNode = new this.Node(value);
    this.size++;
    if (this.root === null) {
        // newNode.next = this.root;
        this.root = newNode;
    } else {
        var tempNode = this.root;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }
        tempNode.next = newNode;
    }
};
LList.prototype.set = function (value, index) {
    if (index > this.size ) {
      throw new Error("Index out bounds exception");
    }
    var tempNode = this.root;
    var count = 0;
    while (count !== index) {
      if(tempNode = tempNode.next){
        count++;
      }
        tempNode.value = value;
    } 
};
LList.prototype.get = function (index) {
    if (index > this.size) {
      throw new Error("Index out bounds exception");
    }
    var tempNode = this.root
    var count  = 0
    while (tempNode !== null){
        if(count === index){
            return tempNode.value
        }
        tempNode = tempNode.next
        count++
    }
};
LList.prototype.remove = function (value) {
    var tempNode = this.root;
    if (tempNode.value === value) {
        var removeValue = tempNode.value;
        this.root = tempNode.next;
        this.size--;
        return removeValue;
    }
    while (tempNode.next !== null) {
        if (tempNode.next.value === value) {
            var removedNode = tempNode.next;
            tempNode.next = tempNode.next.next;
            this.size--;
            return removedNode.value;
        } else {
            tempNode = tempNode.next;
        }
    }
};
LList.prototype.toArray = function () {
    var array = new Array(this.size);
    var index = 0;
    var tempNode = this.root;
    while (tempNode !== null) {
        array[index++] = tempNode.value;
        tempNode = tempNode.next;
    }
    return array;
};
LList.prototype.toString = function () {
    var string = "";
    var tempNode = this.root;
    while (tempNode !== null) {
      string += tempNode.value;
      if (tempNode.next === null) {
        break;
      }
      string += ", ";
      tempNode = tempNode.next;
    }
    return string;
};
LList.prototype.contains = function (value) {
    var tempNode = this.root;
    while (tempNode !== null) {
        if (tempNode.value === value) {
            return true;
        }
        tempNode = tempNode.next;
    }
    return false;
};
LList.prototype.minValue = function () {
    var tempNode = this.root;
    var minVal = tempNode.value;
    while(tempNode !== null) {
        if (minVal > tempNode.value) {
          minVal = tempNode.value;
        }
        tempNode = tempNode.next;
    }
    return minVal;
};
LList.prototype.maxValue = function () {
    var tempNode = this.root;
    var maxVal = tempNode.value;
    while(tempNode !== null) {
        if (maxVal < tempNode.value) {
          maxVal = tempNode.value;
        }
        tempNode = tempNode.next;
    }
    return maxVal;
};
LList.prototype.minIndex = function () {
    var tempNode = this.root;
    var minVal = tempNode.value;
    var count = 0;
    var res;
    while (tempNode !== null) {
        if (minVal > tempNode.value) {
          res = count;
          minVal = tempNode.value;
        }
        tempNode = tempNode.next;
        count++;
    }
    return res;
};
LList.prototype.maxIndex = function () {
    var tempNode = this.root;
    var maxVal = tempNode.value;
    var count = 0;
    var res;
    while (tempNode !== null) {
        if (maxVal < tempNode.value) {
          res = count;
          maxVal = tempNode.value;
        }
        tempNode = tempNode.next;
        count++;
    }
    return res;
};

module.exports = LList;