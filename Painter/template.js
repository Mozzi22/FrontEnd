module.exports = `<div class="wrapper">
<header class="header">
  <h1 class="header__title">P A I N T</h1>
</header>
  <div class="tools">
      <div class="tool">
          <span class="title">Color</span>
          <input type="color" id="color" />
      </div>
      <div class="tool">
          <span class="title">Size</span>
          <input id="size" list="tickmarks" type="range" max="50" min="1" value="3" />
      </div>
      <div class="tool">
          <span class="title hidden">Clear</span>
          <button id="clear" class="clear">Clear</button>
      </div>
      <div class="tool">
          <span class="title hidden">Save</span>
          <button id="save" class="save">Save</button>
      </div>
  </div>
  <canvas id="canvas-area" class="canvas-area"></canvas>
</div>`;