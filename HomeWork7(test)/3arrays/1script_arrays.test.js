var { getMinEl, getMaxEl, getMinIndex, getMaxIndex, sumEvens, reverse, sumEvens2, changeHalves, bubble, select, insert } = require('./1script_arrays.js');

describe('getMinEl', function(){
  it('should be defined', function(){
    expect(getMinEl).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof getMinEl).toBe('function')
  })
  it('should be return min', function () {
    expect(getMinEl([7, 1, 22, 1, 102, 0])).toBe(0)
  })
})

describe('getMaxEl', function(){
  it('should be defined', function(){
    expect(getMaxEl).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof getMaxEl).toBe('function')
  }) 
  it('should be Array.isArray(arr) !== true', function(){
    expect(getMaxEl('asd')).not.toBe(22)
  })
  it('should be return max', function () {
    expect(getMaxEl([7, 1, 22, 1, 102, 0])).toBe(102)
  })
})

describe('getMinIndex', function(){
  it('should be defined', function(){
    expect(getMinIndex).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof getMinIndex).toBe('function')
  })
  it('should be Array.isArray(arr) !== true', function(){
    expect(getMinIndex('asd')).not.toBe(4)
  })
  it('should be return min index', function() {
    expect(getMinIndex([7, 1, 22, 1, 102, 0])).toBe(5)
  })
})

describe('getMaxIndex', function(){
  it('should be defined', function(){
    expect(getMaxIndex).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof getMaxIndex).toBe('function')
  })
  it('should be return max index', function() {
    expect(getMaxIndex([7, 1, 22, 1, 102, 0])).toBe(4)
  })
})

describe('sumEvens', function(){
  it('should be defined', function(){
    expect(sumEvens).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof sumEvens).toBe('function')
  })
  it('should be Array.isArray(arr) !== true', function(){
    expect(sumEvens('asd')).not.toBe(2)
  })
  it('should be result sumEvens', function() {
    expect(sumEvens([7, 1, 22, 1, 102, 0])).toBe(2)
  })
})

describe('reverse', function(){
  it('should be defined', function(){
    expect(reverse).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof reverse).toBe('function')
  })
  it('should be result reverse', function() {
    expect(reverse([7, 1, 22, 1, 102, 0])).toStrictEqual([0, 102, 1, 22, 1, 7])
  })
})

describe('sumEvens2', function(){
  it('should be defined', function(){
    expect(sumEvens2).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof sumEvens2).toBe('function')
  })
  it('should be Array.isArray(arr) !== true', function(){
    expect(sumEvens2('asd')).not.toBe(3)
  })
  it('should be result reverse', function() {
    expect(sumEvens2([7, 1, 22, 1, 102, 0])).toBe(3)
  })
})

describe('changeHalves', function(){
  it('should be defined', function(){
    expect(changeHalves).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof changeHalves).toBe('function')
  })
  it('should be Array.isArray(arr) !== true', function(){
    expect(changeHalves('asd')).not.toBe([3, 4, 1, 2])
  })
  it('should be result reverse', function() {
    expect(changeHalves([1, 2, 3, 4])).toStrictEqual([3, 4, 1, 2])
  })
})

describe('bubble', function(){
  it('should be defined', function(){
    expect(bubble).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof bubble).toBe('function')
  })
  it('should be !== Array', function () {
    expect(bubble(4)).not.toBe([7, 1, 22, 1, 102, 0]);
  })
  it('should be bubbl', function () {
    expect(bubble([7, 1, 22, 1, 102, 0])).toStrictEqual([0, 1, 1, 7, 22, 102]);
  })
})

describe('select', function(){
  it('should be defined', function(){
    expect(select).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof select).toBe('function')
  })
   it('should be selectSort', function () {
    expect(select([7, 1, 22, 1, 102, 0])).toStrictEqual([0, 1, 1, 7, 22, 102]);
  })
})

describe('insert', function(){
  it('should be defined', function(){
    expect(insert).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof insert).toBe('function')
  })
 it('should be insert', function () {
    expect(insert([7, 1, 22, 1, 102, 0])).toStrictEqual([0, 1, 1, 7, 22, 102]);
  })
})