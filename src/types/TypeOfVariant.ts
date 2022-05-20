export const VARIANTS = ['default', 'primary', 'secondary', 'tertiary','warning','destructive','positive'] as const;

export type TypeOfVariant = typeof VARIANTS[number];
export default TypeOfVariant;