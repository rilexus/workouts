import { color } from "ui/css/colors/utils";

const gray = (name) => {
  return color(`gray.${name}`);
};

const colors = {
  yellow: {
    10: "yellow",
    80: "#7d7d12",
  },
  gray: {
    50: "#7f7f7f",
    90: "#2f2f2f",
  },
};

export { colors, color, gray };
