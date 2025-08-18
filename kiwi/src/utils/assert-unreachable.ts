export function assertUnreachable(_: never): never {
  throw new Error("Unexpected code path");
}
