export const SHAPES = ['default', 'pill', 'square', 'circle', 'round'] as const;

export type TypeOfShape = typeof SHAPES[number];
export default TypeOfShape;