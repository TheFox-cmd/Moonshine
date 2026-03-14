import { Vec2 } from "../library/vector2d.js";
import { Entity } from "./entity.js";
import { Effect } from "./effect.js";

export type TileInstance = { tileID: string; position: { x: number; y: number } }

export class Tile {
  public tileID: string
  public position: Vec2
  public neighbors: Set<string>
  public occupied: boolean
  public occupant: Entity | null
  public effect: Effect | null

  constructor(tileID: string, position: Vec2) {
    this.tileID = tileID
    this.position = position
    this.neighbors = new Set()
    this.occupied = false
    this.occupant = null
    this.effect = null
  }

  placeEntity(entity: Entity): void {
    this.occupied = true
    this.occupant = entity
  }

  removeEntity(): void {
    this.occupied = false
    this.occupant = null
  }

  isOccupied(): boolean {
    return this.occupied
  }
}

