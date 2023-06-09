import { useMemo } from "react";

const useStyle = (style, deps) => {
  return useMemo(() => style, deps);
};

export default useStyle;
