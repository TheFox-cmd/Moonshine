// ── Canvas Setup ──────────────────────────────────────────
const canvas = document.getElementById("game") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

// ── Input ────────────────────────────────────────────────
const keys = new Set<string>();
window.addEventListener("keydown", (e) => keys.add(e.key));
window.addEventListener("keyup", (e) => keys.delete(e.key));

// ── Game State ───────────────────────────────────────────
const player = {
  x: canvas.width / 2 - 20,
  y: canvas.height / 2 - 20,
  w: 40,
  h: 40,
  speed: 300, // pixels per second
  color: "#4fc3f7",
};

// ── Update ───────────────────────────────────────────────
function update(dt: number) {
  if (keys.has("ArrowUp") || keys.has("w")) player.y -= player.speed * dt;
  if (keys.has("ArrowDown") || keys.has("s")) player.y += player.speed * dt;
  if (keys.has("ArrowLeft") || keys.has("a")) player.x -= player.speed * dt;
  if (keys.has("ArrowRight") || keys.has("d")) player.x += player.speed * dt;

  // Clamp to canvas bounds
  player.x = Math.max(0, Math.min(canvas.width - player.w, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.h, player.y));
}

// ── Render ───────────────────────────────────────────────
function render() {
  // Clear
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);

  // HUD
  ctx.fillStyle = "#888";
  ctx.font = "14px monospace";
  ctx.fillText(`pos: (${player.x.toFixed(0)}, ${player.y.toFixed(0)})`, 10, 20);
  ctx.fillText("WASD / Arrow Keys to move", 10, 40);
}

// ── Game Loop ────────────────────────────────────────────
let lastTime = 0;

function gameLoop(time: number) {
  const dt = (time - lastTime) / 1000; // seconds
  lastTime = time;

  update(dt);
  render();

  requestAnimationFrame(gameLoop);
}

// Kick off
requestAnimationFrame((time) => {
  lastTime = time;
  gameLoop(time);
});
