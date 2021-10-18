export const files = {
  home: {
    cordx56: {
      "profile.txt": `# Kaoru@cordx56
Bachelor of Engineering
`,
      works: {
        "silang.link": "https://silang.cordx.net/\n",
        "slip.link": "https://slip.cordx.net/\n",
      },
      contacts: {
        "github.link": "https://github.com/cordx56\n",
        "keybase.link": "https://keybase.io/cordx56\n",
        "email.link": "mailto:cordx56@cordx.net\n",
      },
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
