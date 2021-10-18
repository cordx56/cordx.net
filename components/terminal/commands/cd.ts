import { Environment } from "../environment";
import { getData } from "../files";
import { homePath, getAbsolutePath } from "../pathtools";

export const cd = (env: Environment, args: string[]): Environment => {
  if (args.length === 0) {
    return { terminal: env.terminal, pwd: homePath, lastReturn: 0 };
  } else if (args.length === 1) {
    const absPath = getAbsolutePath(env.pwd, args[0]);
    const data = getData(absPath);
    if (typeof data === "object" && data !== null) {
      return { terminal: env.terminal, pwd: absPath, lastReturn: 0 };
    } else {
      env.terminal.writeln(`Error: ${args[0]} is not a directory`);
      return { terminal: env.terminal, pwd: env.pwd, lastReturn: 1 };
    }
  } else {
    env.terminal.writeln(`usage: cd [DIRECTORY]`);
    return { terminal: env.terminal, pwd: env.pwd, lastReturn: 1 };
  }
};
