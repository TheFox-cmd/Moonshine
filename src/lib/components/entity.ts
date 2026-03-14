type BypassEntity = 'flag'
type EntityType = 'player' | 'enemy' | 'block' | BypassEntity;

export interface Entity {
  type: EntityType
}

export interface RemovableEntity extends Entity {
  health: number
  attack: number
  defense: number
}

export interface PersistentEntity extends Entity {
  // No health, but may have other properties in the future
  interact(): void
}

