export const parseQueryParam = (
    param: string | string[] | undefined,
    defaultValue: number
  ): number => {
    return typeof param === "string"
      ? parseInt(param, 10) || defaultValue
      : defaultValue;
  };