import type { Node } from "./node.interface";

export interface Diagram {
  variables: Record<string, string>;
  nodes: Record<string, Node>;
}
