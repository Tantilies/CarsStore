/// <reference types="@emotion/react/types/css-prop" />

export const GLOBAL_STYLES = {
  "*, a": {
    boxSizing: "border-box",
    textDecoration: 'none',
    margin: 0,
    padding: 0,
  } as const,
  "html, body, #root": {
    margin: 0,
    padding: 0,
    height: "100%",
  },
  "body": {
    fontFamily: "Inter, sans-serif",
  }
};
