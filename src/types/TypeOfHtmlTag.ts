export const TAGS = ['span', 'button', 'div'] as const;

export type TypeOfHtmlTag = typeof TAGS[number];
export default TypeOfHtmlTag;