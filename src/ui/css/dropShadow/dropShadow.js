import { css } from "styled-components";

const dropShadow = css`
  filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1))
    drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
`;

const dropShadowSm = css`
  filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
`;

const dropShadowMd = css`
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
    drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
`;

export { dropShadow, dropShadowMd, dropShadowSm };
