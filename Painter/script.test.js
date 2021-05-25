const { beforeEach, afterEach, expect } = require('@jest/globals');
var initialize = require('./script');
var template = require('./template');
require('jest-canvas-mock');


describe('initialize', function () {

  beforeEach(() => document.body.innerHTML = template)
  afterEach(() => document.body.innerHTML = '')
  it('initialize should be defined', function () {
    expect(initialize).toBeDefined()
  })
  it('initialize should be function', function () {
    expect(typeof initialize).toBe('function');
  })
  it('initilize are work', function () {
    initialize();
    window.dispatchEvent(new Event('mouseup'))
    // expect(isDrawing).toBe(false);
  })
  it('initilize are work', function () {
    initialize();
    canvas = document.getElementById("canvas-area");
    canvas.dispatchEvent(new Event('mousedown'))
  })
  it('initilize are work', function () {
    initialize();
    var canvas = document.getElementById("canvas-area");
    canvas.dispatchEvent(new Event('mousemove'))
  })
})

