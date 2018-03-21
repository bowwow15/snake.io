function resizeCanvas () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  ctxSnake.width = window.innerWidth;
  ctxSnake.height = window.innerHeight;

  ctxFood.width = window.innerWidth;
  ctxFood.height = window.innerHeight;

  ctxHex.width = window.innerWidth;
  ctxHex.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas, false);