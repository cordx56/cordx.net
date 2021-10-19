import { useRef, useState, useEffect, useCallback } from "react";
import { XTerm } from "xterm-for-react";
import { FitAddon } from "xterm-addon-fit";
import { executeCommand } from "./commands";
import { Environment } from "./environment";
import { commandCompletion, fileCompletion } from "./completion";
import { homePath } from "./pathtools";

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
  const [buffer, setBuffer] = useState("");
  const [cursorPos, setCursorPos] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [historyPos, setHistoryPos] = useState(-1);
  const [env, setEnv] = useState<Environment>({
    terminal: termRef.current?.terminal,
    pwd: homePath,
    lastReturn: 0,
  });
  useEffect(() => {
    const newenv = {
      terminal: termRef.current?.terminal,
      pwd: env.pwd,
      lastReturn: env.lastReturn,
    };
    setEnv(newenv);
    if (newenv.terminal) {
      const fitAddon = new FitAddon();
      newenv.terminal.loadAddon(fitAddon);
      fitAddon.fit();
      showWelcomeMessage();
      showPrompt(newenv);
    }
  }, [termRef]);

  const getTerm = useCallback(() => {
    return termRef.current?.terminal;
  }, [termRef]);

  const clearCommand = useCallback(() => {
    for (let i = 0; i < buffer.length - cursorPos; i++) {
      getTerm().write(" ");
    }
    for (let i = 0; i < buffer.length - cursorPos; i++) {
      getTerm().write("\b");
    }
    for (let i = 0; i < cursorPos; i++) {
      getTerm().write("\b \b");
    }
    setBuffer("");
    setCursorPos(0);
  }, [buffer, setBuffer, cursorPos, setCursorPos, getTerm]);
  const showPrompt = useCallback(
    (env: Environment) => {
      if (env.lastReturn !== 0) {
        getTerm().write(`${env.lastReturn}> `);
      }
      getTerm().write(`${env.pwd} $ `);
    },
    [getTerm]
  );
  const showWelcomeMessage = useCallback(() => {
    getTerm().writeln("Welcome to cordx56 portfolio pseudo terminal!");
    getTerm().writeln("Available commands: whoami, cd, ls, cat, open");
    getTerm().writeln("Example: open works/slip.link");
    getTerm().writeln("");
  }, [getTerm]);

  const onData = useCallback(
    (e: string) => {
      if (e === "\r") {
        // Enter
        getTerm().write("\r\n");
        if (0 < buffer.length) {
          setBuffer("");
          setCursorPos(0);
          const command = buffer.trim();
          setHistory(history.concat([command]));
          const result = executeCommand(env, parseCommand(command));
          setEnv(result);
          showPrompt(result);
        } else {
          showPrompt(env);
        }
        setHistoryPos(history.length);
      } else if (e === "\n") {
      } else if (e === "\u007f") {
        // Backspace
        if (0 < cursorPos) {
          clearCommand();
          const beforeCursor = buffer.slice(0, cursorPos - 1);
          const afterCursor = buffer.slice(cursorPos);
          setBuffer(beforeCursor + afterCursor);
          setCursorPos(cursorPos - 1);
          getTerm().write(beforeCursor + afterCursor);
          for (let i = 0; i < afterCursor.length; i++) {
            getTerm().write("\b");
          }
        }
      } else if (e === "\t") {
        // Tab
        if (0 < buffer.length) {
          const parsedCommand = parseCommand(buffer);
          clearCommand();
          if (parsedCommand.length == 1) {
            const result = commandCompletion(parsedCommand[0]);
            setBuffer(result);
            setCursorPos(result.length);
            getTerm().write(result);
          } else {
            const result = fileCompletion(
              env.pwd,
              parsedCommand[parsedCommand.length - 1]
            );
            const command = parsedCommand
              .slice(0, parsedCommand.length - 1)
              .join(" ");
            const newCommand = `${command} ${result}`;
            setBuffer(newCommand);
            setCursorPos(newCommand.length);
            getTerm().write(newCommand);
          }
        }
      } else if (e === "\u001b[C") {
        // Right Arrow
        if (cursorPos < buffer.length) {
          getTerm().write(e);
          setCursorPos(cursorPos + 1);
        }
      } else if (e === "\u001b[D") {
        // Left Arrow
        if (0 < cursorPos) {
          getTerm().write(e);
          setCursorPos(cursorPos - 1);
        }
      } else if (e === "\u001b[A") {
        // Up Arrow
        if (0 <= historyPos) {
          clearCommand();
          const command = history[historyPos];
          getTerm().write(command);
          setBuffer(command);
          setCursorPos(command.length);
          if (0 < historyPos) {
            setHistoryPos(historyPos - 1);
          }
        }
      } else if (e === "\u001b[B") {
        // Down Arrow
        clearCommand();
        if (historyPos < history.length - 1) {
          const command = history[historyPos + 1];
          getTerm().write(command);
          setBuffer(command);
          setCursorPos(command.length);
          setHistoryPos(historyPos + 1);
        }
      } else {
        clearCommand();
        const beforeCursor = buffer.slice(0, cursorPos);
        const afterCursor = buffer.slice(cursorPos);
        getTerm().write(beforeCursor + e + afterCursor);
        for (let i = 0; i < afterCursor.length; i++) {
          getTerm().write("\b");
        }
        setBuffer(beforeCursor + e + afterCursor);
        setCursorPos(cursorPos + e.length);
      }
    },
    [
      buffer,
      setBuffer,
      env,
      setEnv,
      cursorPos,
      setCursorPos,
      history,
      setHistory,
      historyPos,
      setHistoryPos,
      getTerm,
      clearCommand,
    ]
  );
  return <XTerm ref={termRef} onData={onData} className={props.className} />;
};

export default TerminalIndex;
