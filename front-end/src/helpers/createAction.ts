import { Action } from "../common/types";

export function createAction<T extends string, P>(type: T, payload?: P) {
  return { type, payload };
}
