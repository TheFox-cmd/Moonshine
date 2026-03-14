import { Camera, Renderer } from "/lib/components/camera.js";
import { Level, Edge } from "/lib/components/level.js";

// ── Setup ────────────────────────────────────────────────
const canvas = document.getElementById("game") as HTMLCanvasElement;
const renderer = new Renderer(canvas);
const camera = new Camera(renderer);
camera.position.x = 225;
camera.position.y = 2;

const TILE_SIZE = 40;
const TILE_COLORS = {
  main: "#4fc3f7",
  shortcut: "#ffb74d",
  edge: "#555",
}


// ── Render ───────────────────────────────────────────────
function renderLevel(level: Level) {
  const ctx = renderer.ctx;

  // Draw edges
  ctx.strokeStyle = TILE_COLORS.edge;
  ctx.lineWidth = 2 / camera.scaleFactor;
  for (const [idA, idB] of level.edges) {
    const tileA = level.getTile(idA);
    const tileB = level.getTile(idB);
    if (tileA && tileB) {
      ctx.beginPath();
      ctx.moveTo(tileA.position.x, tileA.position.y);
      ctx.lineTo(tileB.position.x, tileB.position.y);
      ctx.stroke();
    }
  }

  // Draw tiles
  for (const [id, tile] of level.tiles) {
    const halfSize = TILE_SIZE / 2;
    const isShortcut = id.startsWith("shortcut");
    ctx.fillStyle = isShortcut ? TILE_COLORS.shortcut : TILE_COLORS.main;
    ctx.fillRect(
      tile.position.x - halfSize,
      tile.position.y - halfSize,
      TILE_SIZE,
      TILE_SIZE
    );

    // Label
    ctx.fillStyle = "#000";
    ctx.save();
    ctx.translate(tile.position.x, tile.position.y);
    ctx.scale(1, -1); // flip text right-side up (camera flips Y)
    const fontSize = 10 / camera.scaleFactor;
    ctx.font = `${fontSize}px monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(id, 0, 0);
    ctx.restore();
  }
}

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
