import { Tile } from "./tile";

// Tile format: 
export type TileInstance = { tileID: string; position: Position }

// Edge format: [tileIdA, tileIdB, weight]  
export type Edge = [string, string, number] 

export class Level {
  public levelID: string
  public tiles: Map<string, Tile>
  public edges: Edge[]

  constructor(levelID: string, tileInstances: TileInstance[], edges: Edge[]) {
    this.levelID = levelID
    this.tiles = this.setupTiles(tileInstances)
    this.edges = this.setupEdges(edges)
  }

  setupTiles(tileInstances: TileInstance[]): Map<string, Tile> {
    const tiles = new Map<string, Tile>()
    for (const tileInstance of tileInstances) {
      const tile = new Tile(tileInstance.tileID, tileInstance.position)
      tiles.set(tileInstance.tileID, tile)
    }
    return tiles
  }

  setupEdges(edges: Edge[]): Edge[] {
    for (const [tileIdA, tileIdB] of edges) {
      const tileA = this.tiles.get(tileIdA)
      const tileB = this.tiles.get(tileIdB)
      if (tileA && tileB) {
        this.connectDirectionalTiles(tileA, tileB)
      }
    }
    return edges
  }

  connectDirectionalTiles(a: Tile, b: Tile): void {
    a.neighbors.add(b.tileID)
  }

  getTile(tileID: string): Tile | undefined {
    return this.tiles.get(tileID)
  }
}


