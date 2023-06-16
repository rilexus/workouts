const access = (object, path) => {
  const value = path.split(".").reduce((value, key) => value[key], object);
  if (!value) {
    console.warn(`Value is undefined for path: "${path}"!`);
  }
  return value;
};

const color = (name) => {
  return ({ theme }) => {
    return access(theme.colors, name);
  };
};

export { color, access };
