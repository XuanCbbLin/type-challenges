// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = ["FALCON 9", "FALCON HEAVY", "DRAGON", "STARSHIP", "HUMAN SPACEFLIGHT"] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];

// ============= Your Code Here =============
type Length<T extends readonly string[]> = T["length"];

type teslaLength = Length<typeof tesla>; // expected 4
type spaceXLength = Length<typeof spaceX>; // expected 5
