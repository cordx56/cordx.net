import { useRef, useState, useEffect, useCallback } from "react";
import { XTerm } from "xterm-for-react";
import { executeCommand } from './commands';
import { Environment } from './environment';
import { commandCompletion, fileCompletion } from "./completion";
import { homePath } from './pathtools';

const parseCommand = (command: string): string[] => {
  const result = [];
  let buffer = "";
  for (let i = 0; i < command.length; i++) {
    let value = command[i];
    if (value === " ") {
      if (0 < buffer.length) {
        result.push(buffer);
        buffer = "";
      }
    } else if (value === '"' || value === "'") {
      for (; i < command.length; i++) {
        value = command[i];
        if (value === '"' || value === "'") {
          result.push(buffer);
          buffer = "";
          break;
        } else {
          buffer += value;
        }
      }
    } else {
      buffer += value;
    }
  }
  if (0 < buffer.length) {
    result.push(buffer);
  }
  return result;
};

type Props = {
  className?: string;
};

const TerminalIndex = (props: Props) => {
  const termRef = useRef(null);
  const [buffer, setBuffer] = useState('');
  const [env, setEnv] = useState<Environment>({ terminal: termRef.current?.terminal, pwd: homePath, lastReturn: 0 });
  useEffect(() => {
    const newenv = { terminal: termRef.current?.terminal, pwd: env.pwd, lastReturn: env.lastReturn };
    setEnv(newenv);
    if (newenv.terminal) {
      showPrompt(newenv);
    }
  }, [termRef]);

  const clearCommand = useCallback(() => {
    for (let i = 0; i < buffer.length; i++) {
      termRef.current.terminal.write("\b \b");
    }
    setBuffer('');
  }, [buffer, setBuffer, termRef]);
  const showPrompt = useCallback((env: Environment) => {
    if (env.lastReturn !== 0) {
      termRef.current.terminal.write(`${env.lastReturn}> `);
    }
    termRef.current.terminal.write(`${env.pwd} $ `);
  }, [termRef]);

  const onKey = useCallback(
    (event: { key: string; domEvent: KeyboardEvent }) => {
      if (event.domEvent.key === 'Backspace') {
        if (0 < buffer.length) {
          setBuffer(buffer.slice(0, buffer.length - 1));
          termRef.current.terminal.write("\b \b");
        }
      } else if (event.domEvent.key === "Enter") {
        termRef.current.terminal.write("\r\n");
        if (0 < buffer.length) {
          setBuffer('');
          const parsedCommand = parseCommand(buffer);
          const result = executeCommand(env, parsedCommand);
          setEnv(result);
          showPrompt(result);
        } else {
          showPrompt(env);
        }
      } else if (event.domEvent.key === "Tab") {
        if (0 < buffer.length) {
          const parsedCommand = parseCommand(buffer);
          clearCommand();
          if (parsedCommand.length == 1) {
            const result = commandCompletion(parsedCommand[0]);
            setBuffer(result);
            termRef.current.terminal.write(result);
          } else {
            const result = fileCompletion(env.pwd, parsedCommand[parsedCommand.length - 1]);
            const command = parsedCommand.slice(0, parsedCommand.length - 1).join(' ')
            setBuffer(`${command} ${result}`);
            termRef.current.terminal.write(`${command} ${result}`);
          }
        }
      } else if (event.domEvent.key === "ArrowUp") {
        // TODO: History
      } else {
        termRef.current.terminal.write(event.key);
        setBuffer(buffer + event.key);
      }
    },
    [buffer, setBuffer, env, setEnv, termRef]
  );
  return <XTerm ref={termRef} onKey={onKey} className={props.className} />;
};

export default TerminalIndex;
