type EffectType = 'damage' | 'heal' | 'buff' | 'debuff';

interface Effect {
  type: EffectType
  modifier: number
}