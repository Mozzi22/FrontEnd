 var { findSum, primeNumber, sqrt, factorial, calcSum, getMirrorNumber } = require('./1script_cycles.js');
describe('findSum', function(){
  it('should be defined', function(){
    expect(findSum).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof findSum).toBe('function')
  })
  it('should be even', function(){
    expect(6 % 2).toBe(0)
  })
  it('should be even it sum', function(){
    expect(findSum(9)).toBe[25, 5]
  })
  it('should be not even it sum2', function(){
    expect(findSum(9)).not.toBe(2)
  })
})

describe('primeNumber', function(){
  it('should be defined', function(){
    expect(primeNumber).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof primeNumber).toBe('function')
  })
  it('should be num % i === 0', function() {
    expect(primeNumber(3)).toBe(true)
  })
  it('should be num % i === 0', function() {
      expect(primeNumber(3)).not.toBe(false)
  })
  it('should be num % i === 0', function() {
      expect(primeNumber(4)).not.toBe(true)
  })  
})

describe('sqrt', function(){
  it('should be defined', function(){
    expect(sqrt).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof sqrt).toBe('function')
  })
  it('should be i * i <= num', function() {
    expect(sqrt(100)).toBe(10)
  })
  it('should be i * i <= num', function() {
      expect(sqrt(100)).not.toBe(100)
  })
})

describe('factorial', function(){
  it('should be defined', function(){
    expect(factorial).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof factorial).toBe('function')
  })
  it('should be result', function () {
    expect(factorial(5)).toBe(120)
  })
  it('should be result', function () {
      expect(factorial(5)).not.toBe(25)
  })
})

describe('calcSum', function(){
  it('should be defined', function(){
    expect(calcSum).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof calcSum).toBe('function')
  })
  it('should be n === number', function () {
    expect(calcSum(77)).toBe(14)
  })
    it('should be n !== number', function () {
      expect(calcSum('asd')).not.toBe(10)
  })
})

describe('getMirrorNumber', function(){
  it('should be defined', function(){
    expect(getMirrorNumber).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof getMirrorNumber).toBe('function')
  })
  it('should be mirror', function(){
    expect(getMirrorNumber(123)).toBe(321)
  })
})
