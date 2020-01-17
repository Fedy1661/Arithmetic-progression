import React from 'react';

export default () => {
  return (
    <div className="formulae__formula">
      <div className="">
        a<sub>n</sub> =
      </div>
      <span className="fraction">
        <span className="top">
          a<sub>n-1</sub> + a<sub>n+1</sub>
        </span>
        <span className="bottom">2</span>
      </span>
    </div>
  );
};
