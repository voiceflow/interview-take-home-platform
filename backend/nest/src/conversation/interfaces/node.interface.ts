export type Node =
  | TextNode;

export interface TextNode {
  type: 'text';
  value: NodeMarkup;
}

export type NodeMarkup = string | Array<string | { variableID: string }>;
