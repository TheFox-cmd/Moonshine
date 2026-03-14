export type EffectType = 'damage' | 'heal' | 'buff' | 'debuff';

export interface Effect {
  type: EffectType
  modifier: number
}