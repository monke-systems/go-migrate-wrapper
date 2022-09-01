// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isNodeJsError = (e: any): e is NodeJS.ErrnoException => {
  return 'code' in e && 'message' in e;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isError = (e: any): e is Error => {
  return 'message' in e;
};
