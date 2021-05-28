// import chai from "chai";
// import sinon from "sinon";
var { insert, clean, back, equal, percent, operation, factorial, fact, log, f } = require ( '../script.js');

let input = document.querySelector('.input');
let power = "";
describe('insert', function(){
  it('should be defined', function(){
    expect(insert).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof insert).toBe('function')
  })
  // let input = document.querySelector('.input');
  // let power = "";
  // var input.textContent = 0
})

describe('clean', function(){
  it('should be defined', function(){
    expect(clean).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof clean).toBe('function')
  })
})
describe('back', function(){
  it('should be defined', function(){
    expect(back).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof back).toBe('function')
  })
})
describe('equal', function(){
  it('should be defined', function(){
    expect(equal).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof equal).toBe('function')
  })
})
describe('percent', function(){
  it('should be defined', function(){
    expect(percent).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof percent).toBe('function')
  })
})
describe('operation', function(){
  it('should be defined', function(){
    expect(operation).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof operation).toBe('function')
  })
})
describe('factorial', function(){
  it('should be defined', function(){
    expect(factorial).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof factorial).toBe('function')
  })
})
describe('fact', function(){
  it('should be defined', function(){
    expect(fact).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof fact).toBe('function')
  })
})
describe('log', function(){
  it('should be defined', function(){
    expect(log).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof log).toBe('function')
  })
})
describe('f', function(){
  it('should be defined', function(){
    expect(f).toBeDefined()
  })
  it('should be function', function(){
    expect(typeof f).toBe('function')
  })
})