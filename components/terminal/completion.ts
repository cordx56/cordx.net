import { commands } from "./commands";
import { getData } from "./files";
import { getAbsolutePath, getAbsolutePathArray } from "./pathtools";

export const ld = (x: string, y: string): number => {
  if (x.length === 0) {
    return y.length;
  }
  if (y.length === 0) {
    return x.length;
  }
  if (x[0] === y[0]) {
    return ld(x.slice(1), y.slice(1));
  }
  return (
    1 +
    Math.min(ld(x.slice(1), y), ld(x, y.slice(1)), ld(x.slice(1), y.slice(1)))
  );
};

export const sld = (x: string, y: string): number => {
  return 1 - ld(x, y) / Math.max(x.length, y.length);
};

export const commandCompletion = (buffer: string): string => {
  let candidate = null;
  let max = 0;
  for (const property in commands) {
    const sldvalue = sld(buffer, property);
    if (max <= sldvalue) {
      candidate = property;
      max = sldvalue;
    }
  }
  return candidate;
};
export const fileCompletion = (pwd: string, buffer: string): string => {
  const absSplitted = getAbsolutePathArray(pwd, buffer);
  let latestPath = "";
  while (0 < absSplitted.length) {
    latestPath = absSplitted.pop();
    const data = getData("/" + absSplitted.join("/"));
    if (data) {
      let candidate = null;
      let max = 0;
      for (const property in data) {
        const sldvalue = sld(latestPath, property);
        if (max <= sldvalue) {
          candidate = property;
          max = sldvalue;
        }
      }
      if (0 < absSplitted.length) {
        return "/" + absSplitted.join("/") + "/" + candidate;
      } else {
        return candidate;
      }
    }
  }
  return "";
};
