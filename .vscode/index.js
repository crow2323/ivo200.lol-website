const canvas = document.getElementById("slime");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let drops = [];

function createDrop() {
  drops.push({
    x: Math.random() * canvas.width,
    y: 0,
    radius: 20 + Math.random() * 20,
    speed: 2 + Math.random() * 3
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drops.forEach(drop => {
    drop.y += drop.speed;

    ctx.beginPath();
    ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
    ctx.fillStyle = "a703c0";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

setInterval(createDrop, 500);
animate();

ctx.shadowColor = "rgba(234, 0, 235, 20)";
ctx.shadowBlur = 30;
ctx.shadowOffsetX = 0;
ctx.shadowOffsetY = 10;