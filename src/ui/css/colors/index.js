import { color } from "ui/css/colors/utils";

const gray = (name) => {
  return color(`gray.${name}`);
};

const colors = {
  gray: {
    50: "#7f7f7f",
    90: "#2f2f2f",
  },
};

export { colors, color, gray };
