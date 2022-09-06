export interface AnimatableProperties {
  // translationX
  tx: { previous: number; current: number; amt: number };
  // translationY
  ty: { previous: number; current: number; amt: number };
  // Rotation angle
  rotation: { previous: number; current: number; amt: number };
  // CSS filter (brightness) value
  brightness: { previous: number; current: number; amt: number };
}
