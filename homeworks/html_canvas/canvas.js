(() => {
  // inicializar canvas con su id
  const canvas = document.querySelector("#canvas");
  const width = 500;
  const height = 500;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  const drawFillRect = (x, y, width, height, hexColor, ctx) => {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fillStyle = hexColor;
    ctx.fill();
  };
  // rectangulo pricipal rojo pastel
  drawFillRect((width/2)-100, (height/2)-150, 200, 300,  "#F26D85", ctx);
  // rectangulo superior violeta pastel
  drawFillRect(280, 20, 120, 190, "#E97FF4", ctx);
  // circulo morado pastel
  ctx.beginPath();
  ctx.arc(347, 260, 50, 0, 2*Math.PI);
  ctx.fillStyle = "#9193F6";
  ctx.fill();
  // cuadrado cyan pastel
  drawFillRect(80, 300, 100, 110, "#A4F3F8", ctx);
})()