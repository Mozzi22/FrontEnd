var { numberOperation, coordinates, sumPositiv, calculateExpression, getMark } = require('./1script_operators.js');
describe('numberOperation', function(){
  it('should be defined', function(){
    expect(numberOperation).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof numberOperation).toBe('function')
  })
  it('should be a * b', function(){
    expect(numberOperation(2, 3)).toBe(6)
  })
  it('should be a * b', function(){
    expect(numberOperation(2, 3)).not.toBe(5)
  })
  it('should be a + b', function(){
    expect(numberOperation(3, 2)).toBe(5)
  })
  it('should be a + b', function(){
      expect(numberOperation(3, 2)).not.toBe(6)
  })
})

describe('coordinates', function(){
  it('should be defined1', function(){
    expect(coordinates).toBeDefined()
  })
  it('should be 1 chetvert', function(){
    expect(coordinates(6, 5)).toBe('1 четверть')
  })
  it('should be 2 chetvert', function(){
    expect(coordinates(-3, 2)).toBe('2 четверть')
  })
  it('should be 3 chetvert', function(){
    expect(coordinates(-3, -2)).toBe('3 четверть')
  })
  it('should be 4 chetvert', function(){
    expect(coordinates(3, -2)).toBe('4 четверть')
  })
  it('should be X', function(){
    expect(coordinates(1, 0)).toBe('ось Х')
  })
  it('should be Y', function(){
    expect(coordinates(0, 1)).toBe('ось У')
  })
  it('should be center', function(){
    expect(coordinates(0, 0)).toBe('Центр координат')
  })
  it('should be 1 chetvert', function(){
    expect(coordinates(6, 5)).not.toBe('2 четверть')
  })
  it('should be 1 chetvert', function(){
      expect(coordinates(6, 5)).not.toBe('3 четверть')
  })
  it('should be 1 chetvert', function(){
      expect(coordinates(6, 5)).not.toBe('4 четверть')
    })
  it('should be 1 chetvert', function(){
    expect(coordinates(6, 5)).not.toBe('ось Х')
  })
  it('should be 1 chetvert', function(){
    expect(coordinates(6, 5)).not.toBe('ось У')
  })
  it('should be 1 chetvert', function(){
    expect(coordinates(6, 5)).not.toBe('Центр координат')
  })
  it('should be 2 chetvert', function(){
    expect(coordinates(-3, 2)).not.toBe('1 четверть')
  })
  it('should be 2 chetvert', function(){
      expect(coordinates(-3, 2)).not.toBe('3 четверть')
  })
  it('should be 2 chetvert', function(){
      expect(coordinates(-3, 2)).not.toBe('4 четверть')
  })
  it('should be 2 chetvert', function(){
  expect(coordinates(-3, 2)).not.toBe('ось Х')
  })
  it('should be 2 chetvert', function(){
  expect(coordinates(-3, 2)).not.toBe('ось У')
  })
  it('should be 2 chetvert', function(){
  expect(coordinates(-3, 2)).not.toBe('Центр координат')
  })
  it('should be 3 chetvert', function(){
    expect(coordinates(-3, -2)).not.toBe('1 четверть')
  })
  it('should be 3 chetvert', function(){
      expect(coordinates(-3, -2)).not.toBe('2 четверть')
  })
  it('should be 3 chetvert', function(){
      expect(coordinates(-3, -2)).not.toBe('4 четверть')
  })
  it('should be 3 chetvert', function(){
  expect(coordinates(-3, -2)).not.toBe('ось Х')
  })
  it('should be 3 chetvert', function(){
  expect(coordinates(-3, -2)).not.toBe('ось У')
  })
  it('should be 3 chetvert', function(){
  expect(coordinates(-3, -2)).not.toBe('Центр координат')
  })
  it('should be 4 chetvert', function(){
    expect(coordinates(3, -2)).not.toBe('1 четверть')
  })
  it('should be 4 chetvert', function(){
      expect(coordinates(3, -2)).not.toBe('2 четверть')
  })
  it('should be 4 chetvert', function(){
      expect(coordinates(3, -2)).not.toBe('3 четверть')
  })
  it('should be 4 chetvert', function(){
  expect(coordinates(3, -2)).not.toBe('ось Х')
  })
  it('should be 4 chetvert', function(){
  expect(coordinates(3, -2)).not.toBe('ось У')
  })
  it('should be 4 chetvert', function(){
  expect(coordinates(3, -2)).not.toBe('Центр координат')
  })
  it('should be X', function(){
    expect(coordinates(1, 0)).not.toBe('1 четверть')
  })
  it('should be X', function(){
      expect(coordinates(1, 0)).not.toBe('2 четверть')
  })
  it('should be X', function(){
      expect(coordinates(1, 0)).not.toBe('3 четверть')
  })
  it('should be X', function(){
  expect(coordinates(1, 0)).not.toBe('4 четверть')
  })
  it('should be X', function(){
  expect(coordinates(1, 0)).not.toBe('ось У')
  })
  it('should be X', function(){
  expect(coordinates(1, 0)).not.toBe('Центр координат')
  })
  it('should be Y', function(){
    expect(coordinates(0, 1)).not.toBe('1 четверть')
  })
  it('should be Y', function(){
      expect(coordinates(0, 1)).not.toBe('2 четверть')
  })
  it('should be Y', function(){
      expect(coordinates(0, 1)).not.toBe('3 четверть')
  })
  it('should be Y', function(){
  expect(coordinates(0, 1)).not.toBe('4 четверть')
  })
  it('should be Y', function(){
  expect(coordinates(0, 1)).not.toBe('ось X')
  })
  it('should be Y', function(){
  expect(coordinates(0, 1)).not.toBe('Центр координат')
  })
  it('should be center', function(){
    expect(coordinates(0, 0)).not.toBe('1 четверть')
  })
  it('should be center', function(){
      expect(coordinates(0, 0)).not.toBe('2 четверть')
  })
  it('should be center', function(){
      expect(coordinates(0, 0)).not.toBe('3 четверть')
  })
  it('should be center', function(){
  expect(coordinates(0, 0)).not.toBe('4 четверть')
  })
  it('should be center', function(){
  expect(coordinates(0, 0)).not.toBe('ось X')
  })
  it('should be center', function(){
  expect(coordinates(0, 0)).not.toBe('ось X')
  })
})

describe('sumPositiv', function(){
  it('should be defined', function(){
    expect(sumPositiv).toBeDefined()
  })
   it('should be function', function(){
      expect(typeof sumPositiv).toBe('function')
  })
   it('should be typeof', function(){
      expect(sumPositiv([-2, 5,-9])).toBe(5)
  })
  it('should be array[i] > 0', function(){
      expect(sumPositiv([-2, 5, 7])).toBe(12)
  })
})

describe('calculateExpression', function(){
  it('should be defined', function(){
    expect(calculateExpression).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof calculateExpression).toBe('function')
  })
  it('should be multi > summa', function(){
      expect(calculateExpression(1,9,4)).toBe(39)
  })
  it('should be multi > summa', function(){
      expect(calculateExpression(1,9,4)).not.toBe(-12)
  })
  it('should be multi < summa', function(){
      expect(calculateExpression(1,9,1)).toBe(14)
  })
  it('should be multi < summa', function(){
      expect(calculateExpression(1,9,1)).not.toBe(12)
  })
})

describe('getMark', function(){
  it('should be defined2', function(){
    expect(getMark).toBeDefined()
  })
  it('should be F', function(){
    expect(getMark(3)).toBe("F")
  })
  it('should be F', function(){
    expect(getMark(3)).not.toBe("E")
  })
  it('should be F', function(){
    expect(getMark(3)).not.toBe("D")
  })
  it('should be F', function(){
    expect(getMark(3)).not.toBe("C")
  })
  it('should be F', function(){
    expect(getMark(3)).not.toBe("B")
  })
  it('should be F', function(){
    expect(getMark(3)).not.toBe("A")
  })
  it('should be E', function(){
    expect(getMark(20)).toBe("E")
  })
  it('should be E', function(){
    expect(getMark(20)).not.toBe("F")
  })
  it('should be E', function(){
    expect(getMark(20)).not.toBe("D")
  })
  it('should be E', function(){
    expect(getMark(20)).not.toBe("C")
  })
  it('should be E', function(){
    expect(getMark(20)).not.toBe("B")
  })
  it('should be E', function(){
    expect(getMark(20)).not.toBe("A")
  })
  it('should be D', function(){
    expect(getMark(40)).toBe("D")
  })
  it('should be D', function(){
    expect(getMark(40)).not.toBe("F")
  })
  it('should be D', function(){
    expect(getMark(40)).not.toBe("E")
  })
  it('should be D', function(){
    expect(getMark(40)).not.toBe("C")
  })
  it('should be D', function(){
    expect(getMark(40)).not.toBe("B")
  })
  it('should be D', function(){
    expect(getMark(40)).not.toBe("A")
  })
  it('should be C', function(){
    expect(getMark(60)).toBe("C")
  })
  it('should be C', function(){
    expect(getMark(60)).not.toBe("F")
  })
  it('should be C', function(){
    expect(getMark(60)).not.toBe("E")
  })
  it('should be C', function(){
    expect(getMark(60)).not.toBe("D")
  })
  it('should be C', function(){
    expect(getMark(60)).not.toBe("B")
  })
  it('should be C', function(){
    expect(getMark(60)).not.toBe("A")
  })
  it('should be B', function(){
    expect(getMark(80)).toBe("B")
  })
  it('should be B', function(){
    expect(getMark(80)).not.toBe("F")
  })
  it('should be B', function(){
    expect(getMark(80)).not.toBe("E")
  })
  it('should be B', function(){
    expect(getMark(80)).not.toBe("D")
  })
  it('should be B', function(){
    expect(getMark(80)).not.toBe("C")
  })
  it('should be B', function(){
    expect(getMark(80)).not.toBe("A")
  })
  it('should be A', function(){
    expect(getMark(90)).toBe("A")
  })
  it('should be A', function(){
    expect(getMark(90)).not.toBe("F")
  })
  it('should be A', function(){
    expect(getMark(90)).not.toBe("E")
  })
  it('should be A', function(){
    expect(getMark(90)).not.toBe("D")
  })
  it('should be A', function(){
    expect(getMark(90)).not.toBe("B")
  })
  it('should be A', function(){
    expect(getMark(90)).not.toBe("C")
  })
})
