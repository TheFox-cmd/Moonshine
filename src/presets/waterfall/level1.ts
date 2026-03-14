import { Edge, Level, TileInstance } from '../../components/level'
const level1Tiles: TileInstance[] = [
  { tileID: 'main-0', position: { x: 200, y: 0 } },
  { tileID: 'main-1', position: { x: 400, y: 0 } },
  { tileID: 'main-2', position: { x: 400, y: 2 } },
  { tileID: 'main-3', position: { x: 400, y: 4 } },
  { tileID: 'main-4', position: { x: 300, y: 4 } },
  { tileID: 'main-5', position: { x: 200, y: 4 } },
  { tileID: 'main-6', position: { x: 100, y: 4 } },
  { tileID: 'main-7', position: { x: 50, y: 4 } },
  { tileID: 'main-8', position: { x: 50, y: 2 } },
  { tileID: 'main-9', position: { x: 50, y: 0 } },
  
  { tileID: 'shortcut-4-1', position: { x: 3, y: 3 } },
  { tileID: 'shortcut-4-2', position: { x: 2, y: 3 } },
  { tileID: 'shortcut-4-3', position: { x: 1, y: 3 } },
]

const level1Edges: Edge[] = [
  ['main-0', 'main-1', 1],
  ['main-1', 'main-2', 1],
  ['main-2', 'main-3', 1],
  ['main-3', 'main-4', 1],
  ['main-4', 'main-5', 1],
  ['main-5', 'main-6', 1],
  ['main-6', 'main-7', 1],
  ['main-7', 'main-8', 1],
  ['main-8', 'main-9', 3],
  ['main-9', 'main-0', 1],

  ['main-4', 'shortcut-4-1', 1],
  ['shortcut-4-1', 'shortcut-4-2', 1],
  ['shortcut-4-2', 'shortcut-4-3', 1],
  ['shortcut-4-3', 'main-7', 1],
]

function createLevel1(): Level {
  const waterfallLevel1 = new Level(generateID(), level1Tiles, level1Edges)
  return waterfallLevel1
}
