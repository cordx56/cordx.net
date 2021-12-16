export type Environment = {
  terminal: any;
  pwd: string;
  lastReturn: number;
  onDataPassFunction: (env: Environment, data: string) => Environment | null;
};
