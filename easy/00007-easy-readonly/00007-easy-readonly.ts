// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// ============= Your Code Here =============
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

const todo: MyReadonly<Todo1> = {
  title: "Hey",
  description: "foobar",
  completed: false,
  meta: {
    author: "Qux",
  },
};

todo.title = "Hello"; // Error: Cannot assign to 'title' because it is a read-only property.
