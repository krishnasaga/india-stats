import React from "react";

export const BrowserOnly = ({ children }) => {
  const isSSR = typeof window === "undefined";
  if (isSSR) return null;
  return children;
};
