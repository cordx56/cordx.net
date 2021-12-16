import { Environment } from "../environment";
import { getData } from "../files";
import { getAbsolutePath } from "../pathtools";

export const open = (env: Environment, args: string[]): Environment => {
  for (const value of args) {
    const data = getData(getAbsolutePath(env.pwd, value));
    if (typeof data === "string") {
      window.open(data.trim(), "_blank").focus();
    } else {
      env.terminal.writeln(`Error: ${value} is not a file`);
      return {
        terminal: env.terminal,
        pwd: env.pwd,
        lastReturn: 2,
        onDataPassFunction: null,
      };
    }
  }
  return {
    terminal: env.terminal,
    pwd: env.pwd,
    lastReturn: 0,
    onDataPassFunction: null,
  };
};
