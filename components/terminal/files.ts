export const files = {
  home: {
    cordx56: {
      profile: `# Kaoru@cordx56
Bachelor of Engineering
`,
    },
  },
};

export const getData = (path: string): any => {
  const splitted = path.slice(1).split("/");
  let data = files;
  for (const value of splitted) {
    if (0 < value.length) {
      data = data[value];
      if (data === undefined) {
        return null;
      }
    }
  }
  return data;
};
