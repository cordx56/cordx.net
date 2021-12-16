import { Environment } from "../environment";

export const whoami = (env: Environment, args: string[]): Environment => {
  env.terminal.writeln("cordx56");
  return {
    terminal: env.terminal,
    pwd: env.pwd,
    lastReturn: 0,
    onDataPassFunction: null,
  };
};
