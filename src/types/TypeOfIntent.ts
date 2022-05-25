export const INTENTS = ['default', 'primary', 'secondary', 'tertiary','consumptive','destructive','constructive'] as const;

export type TypeOfIntent = typeof INTENTS[number];
export default TypeOfIntent;