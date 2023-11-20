import React from 'react';
import WithSubnavigation from "./NavBar";

export default ({ children }) => {
  return (
    <div>
      <WithSubnavigation />
      {children}
    </div>
  );
};
