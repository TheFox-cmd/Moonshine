type BypassEntity = 'flag'
type EntityType = 'player' | 'enemy' | 'block' | BypassEntity;

interface Entity {
  type: EntityType
}

interface RemovableEntity extends Entity {
  health: number
  attack: number
  defense: number
}

interface PersistentEntity extends Entity {
  // No health, but may have other properties in the future
  interact(): void
}

