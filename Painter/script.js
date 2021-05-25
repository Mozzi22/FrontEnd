

function initialize() {
  var canvas = null,
  btnClear = null,
  btnSave = null,
  inputColor = null,
  inputSize = null,
  ctx = null,
  canvasWidth = 900,
  canvasHeight = 500,
  isDrawing = false,
  lineWidth = 3;
  canvas = document.getElementById("canvas-area");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  ctx = canvas.getContext("2d");

  btnClear = document.getElementById("clear");
  btnSave = document.getElementById("save");
  inputColor = document.getElementById("color");
  inputSize = document.getElementById("size");

  window.onmouseup = function () {
    isDrawing = false;
    ctx.beginPath();
  }

  canvas.onmousedown = function (e) {
    isDrawing = true;
  }

  canvas.onmousemove = function (e) {
    if (isDrawing) {
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.lineWidth = lineWidth * 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(e.offsetX, e.offsetY, lineWidth, 0, 2 * Math.PI, true);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);
    }
  }

  btnClear.onclick = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  btnSave.onclick = function () {
    canvas.toBlob(function (blob) {
      var link = document.createElement("a");
      link.download = "paint.jpeg";
      link.href = URL.createObjectURL(blob);
      link.dispatchEvent(new MouseEvent('click'));
    }, 'image/jpeg', 1);
  }

  inputColor.onchange = function () {
    ctx.fillStyle = this.value;
    ctx.strokeStyle = this.value;
  }

  inputSize.onchange = function () {
    lineWidth = this.value;
  }
}

window.onload = initialize;

module.exports = initialize