var { getDay, findDistance, ChisloPropis, ChisloNePropis } = require('./1script_function.js');

describe('getDay', function(){
  it('should be defined', function(){
    expect(getDay).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof getDay).toBe('function')
  })
  it('should be day', function () {
    expect(getDay(2)).toBe('Tuesday');
  })
})

describe('findDistance', function () {
  it('should be defined ', function () {
      expect(findDistance).toBeDefined()
  })
  it('should be function', function () {
      expect(typeof findDistance).toBe('function')
  })
  it('should be findDistance', function () {
      expect(findDistance(0, 1, 0, 0)).toBe(1)
  })
})

describe('ChisloPropis', function(){
  it('should be defined', function(){
      expect(ChisloPropis).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof ChisloPropis).toBe('function')
  })
  it('should be n===0', function(){
    expect(ChisloPropis(0)).toBe('ноль')
  })
  it('should be n===0', function(){
    expect(ChisloPropis(0)).not.toBe('один')
  })
  it('should be n===0', function(){
    expect(ChisloPropis(0)).not.toBe('одиннадцать')
  })
  it('should be n===0', function(){
    expect(ChisloPropis(0)).not.toBe('двадцать')
  })
  it('should n===0', function(){
    expect(ChisloPropis(0)).not.toBe('сто')
  })
  it('should be n===0', function(){
    expect(ChisloPropis(0)).not.toBe('сто десять')
  })
  it('should be n===0', function(){
    expect(ChisloPropis(0)).not.toBe('сто одиннадцать')
  })
  it('should be n===0', function(){
    expect(ChisloPropis(0)).not.toBe('сто один')
  })
  //
  it('should be n<10', function(){
    expect(ChisloPropis(1)).toBe('один')
  })
  it('should be n<10', function(){
    expect(ChisloPropis(1)).not.toBe('ноль')
  })
  it('should be n<10', function(){
    expect(ChisloPropis(1)).not.toBe('одиннадцать')
  })
  it('should be n<10', function(){
    expect(ChisloPropis(1)).not.toBe('двадцать')
  })
  it('should be n<10', function(){
    expect(ChisloPropis(1)).not.toBe('сто')
  })
  it('should be n<10', function(){
    expect(ChisloPropis(1)).not.toBe('сто десять')
  })
  it('should be n<10', function(){
    expect(ChisloPropis(1)).not.toBe('сто одиннадцать')
  })
  it('should be n<10', function(){
    expect(ChisloPropis(1)).not.toBe('сто один')
  })
  it('should be n > 10 && n < 20', function(){
    expect(ChisloPropis(11)).toBe('одиннадцать')
  })
  it('should be n > 10 && n < 20', function(){
    expect(ChisloPropis(11)).not.toBe('ноль')
  })
  it('should be n > 10 && n < 20', function(){
    expect(ChisloPropis(11)).not.toBe('один')
  })
  it('should be n > 10 && n < 20', function(){
    expect(ChisloPropis(11)).not.toBe('двадцать')
  })
  it('should be n > 10 && n < 20', function(){
    expect(ChisloPropis(11)).not.toBe('сто')
  })
  it('should be n > 10 && n < 20', function(){
    expect(ChisloPropis(11)).not.toBe('сто десять')
  })
  it('should be n > 10 && n < 20', function(){
    expect(ChisloPropis(11)).not.toBe('сто одиннадцать')
  })
  it('should be n > 10 && n < 20', function(){
    expect(ChisloPropis(11)).not.toBe('сто один')
  })
  it('should be b === 0 && n < 100', function(){
    expect(ChisloPropis(20)).toBe('двадцать')
  })
  it('should be b === 0 && n < 100', function(){
    expect(ChisloPropis(20)).not.toBe('ноль')
  })
  it('should be b === 0 && n < 100', function(){
    expect(ChisloPropis(20)).not.toBe('один')
  })
  it('should be b === 0 && n < 100', function(){
    expect(ChisloPropis(20)).not.toBe('одиннадцать')
  })
  it('should be b === 0 && n < 100', function(){
    expect(ChisloPropis(20)).not.toBe('сто')
  })
  it('should be b === 0 && n < 100', function(){
    expect(ChisloPropis(20)).not.toBe('сто десять')
  })
  it('should be b === 0 && n < 100', function(){
    expect(ChisloPropis(20)).not.toBe('сто одиннадцать')
  })
  it('should be b === 0 && n < 100', function(){
    expect(ChisloPropis(20)).not.toBe('сто один')
  })
  it('should b === 0 && c === 0', function(){
    expect(ChisloPropis(100)).toBe('сто')
  })
  it('should be b === 0 && c === 0', function(){
    expect(ChisloPropis(100)).not.toBe('ноль')
  })
  it('should be b === 0 && c === 0', function(){
    expect(ChisloPropis(100)).not.toBe('один')
  })
  it('should be b === 0 && c === 0', function(){
    expect(ChisloPropis(100)).not.toBe('одиннадцать')
  })
  it('should be b === 0 && c === 0', function(){
    expect(ChisloPropis(100)).not.toBe('двадцать')
  })
  it('should be b === 0 && c === 0', function(){
    expect(ChisloPropis(100)).not.toBe('сто десять')
  })
  it('should be b === 0 && c === 0', function(){
    expect(ChisloPropis(100)).not.toBe('сто одиннадцать')
  })
  it('should be b === 0 && c === 0', function(){
    expect(ChisloPropis(100)).not.toBe('сто один')
  })
  it('should be b === 0 && c!==0', function(){
    expect(ChisloPropis(110)).toBe('сто десять')
  })
  it('should be b === 0 && c!==0', function(){
    expect(ChisloPropis(110)).not.toBe('ноль')
  })
  it('should be b === 0 && c!==0', function(){
    expect(ChisloPropis(110)).not.toBe('один')
  })
  it('should be b === 0 && c!==0', function(){
    expect(ChisloPropis(110)).not.toBe('одиннадцать')
  })
  it('should be b === 0 && c!==0', function(){
    expect(ChisloPropis(110)).not.toBe('двадцать')
  })
  it('should be b === 0 && c!==0', function(){
    expect(ChisloPropis(110)).not.toBe('сто')
  })
  it('should be b === 0 && c!==0', function(){
    expect(ChisloPropis(110)).not.toBe('сто одиннадцать')
  })
  it('should be b === 0 && c!==0', function(){
    expect(ChisloPropis(110)).not.toBe('сто один')
  })
  it('should be c>10 && c<20', function(){
    expect(ChisloPropis(111)).toBe('сто одиннадцать')
  })
  it('should be c>10 && c<20', function(){
    expect(ChisloPropis(111)).not.toBe('ноль')
  })
  it('should be c>10 && c<20', function(){
    expect(ChisloPropis(111)).not.toBe('один')
  })
  it('should be c>10 && c<20', function(){
    expect(ChisloPropis(111)).not.toBe('одиннадцать')
  })
  it('should be c>10 && c<20', function(){
    expect(ChisloPropis(111)).not.toBe('двадцать')
  })
  it('should be c>10 && c<20', function(){
    expect(ChisloPropis(111)).not.toBe('сто')
  })
  it('should be c>10 && c<20', function(){
    expect(ChisloPropis(111)).not.toBe('сто десять')
  })
  it('should be c>10 && c<20', function(){
    expect(ChisloPropis(111)).not.toBe('сто один')
  })
  it('should be c<10', function(){
    expect(ChisloPropis(101)).toBe('сто один')
  })
  it('should be c<10', function(){
    expect(ChisloPropis(101)).not.toBe('ноль')
  })
  it('should be c<10', function(){
    expect(ChisloPropis(101)).not.toBe('один')
  })
  it('should be c<10', function(){
    expect(ChisloPropis(101)).not.toBe('одиннадцать')
  })
  it('should be c<10', function(){
    expect(ChisloPropis(101)).not.toBe('двадцать')
  })
  it('should be c<10', function(){
    expect(ChisloPropis(101)).not.toBe('сто')
  })
  it('should be c<10', function(){
    expect(ChisloPropis(101)).not.toBe('сто десять')
  })
  it('should be c<10', function(){
    expect(ChisloPropis(101)).not.toBe('сто одиннадцать')
  })
})

describe('ChisloNePropis', function(){
  it('should be defined', function(){
      expect(ChisloNePropis).toBeDefined();
  })
  it('should be function', function(){
    expect(typeof ChisloNePropis).toBe('function')
  })
  it('should be str2[0] === A1[i]', function(){
    expect(ChisloNePropis('один')).toBe(1)
  })
  it('should be str2[0] === A1[i]', function(){
    expect(ChisloNePropis('один')).not.toBe(11)
  })
  it('should be str2[0] === A1[i]', function(){
    expect(ChisloNePropis('один')).not.toBe(20)
  })
  it('should be str2[0] === A1[i]', function(){
    expect(ChisloNePropis('один')).not.toBe(100)
  })
  it('should be str2[0] === A1[i]', function(){
    expect(ChisloNePropis('один')).not.toBe(110)
  })
  it('should be str2[0] === A1[i]', function(){
    expect(ChisloNePropis('один')).not.toBe(101)
  })
  it('should be str2[0] === A2[i]', function(){
    expect(ChisloNePropis('одиннадцать')).toBe(11)
  })
  it('should be str2[0] === A2[i]', function(){
    expect(ChisloNePropis('одиннадцать')).not.toBe(1)
  })
  it('should be str2[0] === A2[i]', function(){
    expect(ChisloNePropis('одиннадцать')).not.toBe(20)
  })
  it('should be str2[0] === A2[i]', function(){
    expect(ChisloNePropis('одиннадцать')).not.toBe(100)
  })
  it('should be str2[0] === A2[i]', function(){
    expect(ChisloNePropis('одиннадцать')).not.toBe(110)
  })
  it('should be str2[0] === A2[i]', function(){
    expect(ChisloNePropis('одиннадцать')).not.toBe(101)
  })
  it('should be str2[0] === A3[i] && str2.length < 2', function(){
    expect(ChisloNePropis('двадцать')).toBe(20)
  })
  it('should be str2[0] === A3[i] && str2.length < 2', function(){
    expect(ChisloNePropis('двадцать')).not.toBe(1)
  })
  it('should be str2[0] === A3[i] && str2.length < 2', function(){
    expect(ChisloNePropis('двадцать')).not.toBe(11)
  })
  it('should be str2[0] === A3[i] && str2.length < 2', function(){
    expect(ChisloNePropis('двадцать')).not.toBe(100)
  })
  it('should be str2[0] === A3[i] && str2.length < 2', function(){
    expect(ChisloNePropis('двадцать')).not.toBe(110)
  })
  it('should be str2[0] === A3[i] && str2.length < 2', function(){
    expect(ChisloNePropis('двадцать')).not.toBe(101)
  })
  it('should be str2[0] === A4[i] && str2.length < 2', function(){
    expect(ChisloNePropis('сто')).toBe(100)
  })
  it('should be str2[0] === A4[i] && str2.length < 2', function(){
    expect(ChisloNePropis('сто')).not.toBe(1)
  })
  it('should be str2[0] === A4[i] && str2.length < 2', function(){
    expect(ChisloNePropis('сто')).not.toBe(11)
  })
  it('should be str2[0] === A4[i] && str2.length < 2', function(){
    expect(ChisloNePropis('сто')).not.toBe(20)
  })
  it('should be str2[0] === A4[i] && str2.length < 2', function(){
    expect(ChisloNePropis('сто')).not.toBe(110)
  })
  it('should be str2[0] === A4[i] && str2.length < 2', function(){
    expect(ChisloNePropis('сто')).not.toBe(101)
  })
  it('should be str2[0] === A4[i] && str2.length < 3', function(){
    expect(ChisloNePropis('сто десять')).toBe(110)
  })
  it('should be str2[0] === A4[i] && str2.length < 3', function(){
    expect(ChisloNePropis('сто десять')).not.toBe(1)
  })
  it('should be str2[0] === A4[i] && str2.length < 3', function(){
    expect(ChisloNePropis('сто десять')).not.toBe(11)
  })
  it('should be str2[0] === A4[i] && str2.length < 3', function(){
    expect(ChisloNePropis('сто десять')).not.toBe(20)
  })
  it('should be str2[0] === A4[i] && str2.length < 3', function(){
    expect(ChisloNePropis('сто десять')).not.toBe(100)
  })
  it('should be str2[0] === A4[i] && str2.length < 3', function(){
    expect(ChisloNePropis('сто десять')).not.toBe(101)
  })
  it('should be str2[0] === A4[i] && str2.length < 4', function(){
    expect(ChisloNePropis('сто двадцать один')).toBe(121)
  })
  it('should be str2[0] === A4[i] && str2.length < 4', function(){
    expect(ChisloNePropis('сто двадцать один')).not.toBe(1)
  })
  it('should be str2[0] === A4[i] && str2.length < 4', function(){
    expect(ChisloNePropis('сто двадцать один')).not.toBe(11)
  })
  it('should be str2[0] === A4[i] && str2.length < 4', function(){
    expect(ChisloNePropis('сто двадцать один')).not.toBe(20)
  })
  it('should be str2[0] === A4[i] && str2.length < 4', function(){
    expect(ChisloNePropis('сто двадцать один')).not.toBe(100)
  })
  it('should be str2[0] === A4[i] && str2.length < 4', function(){
    expect(ChisloNePropis('сто двадцать один')).not.toBe(101)
  })
})