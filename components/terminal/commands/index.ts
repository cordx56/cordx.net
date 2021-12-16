import { cd } from "./cd";
import { ls } from "./ls";
import { cat } from "./cat";
import { whoami } from "./whoami";
import { open } from "./open";
import { silangCommand } from "./silang";
import { Environment } from "../environment";

export const commands = {
  cd: cd,
  ls: ls,
  cat: cat,
  whoami: whoami,
  open: open,
  silang: silangCommand,
};

export const executeCommand = (
  env: Environment,
  commands: string[]
): Environment => {
  const command = commands[0];
  const args = commands.slice(1);
  if (command === "cd") {
    return cd(env, args);
  } else if (command === "ls") {
    return ls(env, args);
  } else if (command === "cat") {
    return cat(env, args);
  } else if (command === "whoami") {
    return whoami(env, args);
  } else if (command === "open") {
    return open(env, args);
  } else if (command === "silang") {
    return silangCommand(env, args);
  } else {
    env.terminal.writeln(`Error: ${commands[0]} command not found`);
    return {
      terminal: env.terminal,
      pwd: env.pwd,
      lastReturn: 1,
      onDataPassFunction: null,
    };
  }
};
