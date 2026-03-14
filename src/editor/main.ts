import { Camera, Renderer } from "/lib/components/camera.js";

// ── Setup ────────────────────────────────────────────────
const canvas = document.getElementById("editor") as HTMLCanvasElement;
const renderer = new Renderer(canvas);
const camera = new Camera(renderer);
camera.position.x = 225;
camera.position.y = 2;

console.log("abc");

function render(deltaTime: number) {
  const ctx = renderer.ctx;

  // Clear
  ctx.fillStyle = "#1a1a2e";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  camera.start();
  camera.end();
}

let prevTime : number | undefined = undefined;

// ── Game Loop ────────────────────────────────────────────
function gameLoop(time: number) {
  if (prevTime === undefined) prevTime = time;
  const deltaTime = (time - prevTime) / 1000;
  prevTime = time;

  render(deltaTime);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
