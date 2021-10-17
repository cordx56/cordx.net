import { Environment } from "../environment";
import { getData } from "../files";
import { getAbsolutePath } from "../pathtools";

export const ls = (env: Environment, args: string[]): Environment => {
  if (args.length === 0) {
    const data = getData(env.pwd);
    for (const property in data) {
      env.terminal.write(property);
      env.terminal.write("  ");
    }
    env.terminal.writeln("");
  } else {
    for (const value of args) {
      const data = getData(getAbsolutePath(env.pwd, value));
      if (typeof data === "object" && data !== null) {
        for (const property in data) {
          env.terminal.write(property);
          env.terminal.write("  ");
        }
        env.terminal.writeln("");
      } else if (data === null) {
        env.terminal.writeln(`Error: ${value} is not a file or directory`);
        return { terminal: env.terminal, pwd: env.pwd, lastReturn: 2 };
      } else {
        env.terminal.writeln(data);
      }
    }
  }
  return { terminal: env.terminal, pwd: env.pwd, lastReturn: 0 };
};
