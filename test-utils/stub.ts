export type RecursivePartial<T> = {
  [key in keyof T]?: RecursivePartial<T[key]>;
};

export const stub = <T>(data: RecursivePartial<T>) => {
  return data as T;
};