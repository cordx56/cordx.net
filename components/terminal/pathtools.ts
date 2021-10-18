export const homePath = "/home/cordx56";

export const formatPath = (path: string): string => {
  const pathArray = path.split("/").filter((value) => 0 < value.length);
  if (path[0] === "/") {
    return "/" + pathArray.join("/");
  } else {
    return pathArray.join("/");
  }
};

export const getAbsolutePath = (pwd: string, path: string): string => {
  return "/" + getAbsolutePathArray(pwd, path).join("/");
};

export const getAbsolutePathArray = (pwd: string, path: string): string[] => {
  if (0 < path.length) {
    let joined: string;
    if (path[0] === "/") {
      joined = path;
    } else {
      joined = pwd + "/" + path;
    }
    const splitted = joined.split("/");
    const result = [];
    for (const value of splitted) {
      if (value.length == 0) {
        continue;
      }
      if (value == ".") {
        continue;
      } else if (value == "..") {
        result.pop();
        continue;
      }
      result.push(value);
    }
    return result;
  } else {
    const splitted = pwd.split("/");
    return splitted.filter((value) => 0 < value.length);
  }
};
