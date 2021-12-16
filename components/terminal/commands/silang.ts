import { Environment } from "../environment";
import { exec, welcome_message } from "../../../silang-wasm/pkg";

let buffer = "";

export const silangOnDataPass = (
  env: Environment,
  data: string
): Environment => {
  if (data === "\r") {
    buffer += "\n";
    env.terminal.write("\r\n");
    if (buffer === "exit") {
      return {
        terminal: env.terminal,
        pwd: env.pwd,
        lastReturn: 0,
        onDataPassFunction: null,
      };
    }
    let result = exec(buffer);
    if (result.status !== 0) {
      env.terminal.write(result.output.replace(/\n/g, "\r\n"));
      buffer = "";
      env.terminal.write("> ");
    } else {
      env.terminal.write(". ");
    }
  } else if (data === "\u007f") {
    if (0 < buffer.length) {
      env.terminal.write("\b \b");
      buffer = buffer.slice(0, buffer.length - 1);
    }
  } else {
    buffer += data;
    env.terminal.write(data);
  }
  return env;
};

export const silangCommand = (
  env: Environment,
  args: string[]
): Environment => {
  buffer = "";
  env.terminal.writeln(welcome_message());
  env.terminal.write("> ");
  return {
    terminal: env.terminal,
    pwd: env.pwd,
    lastReturn: 0,
    onDataPassFunction: silangOnDataPass,
  };
};
