import React from 'react';

const withFormula = Wrapped => {
  return props => {
    return (
      <div
        onClick={
          props.canSelect
            ? () => {
                props.selectAnswer(props.id);
              }
            : null
        }
        className={`formulae__formula ${
          props.selectedAnswers.indexOf(props.id) !== -1
            ? 'formulae__formula-active'
            : ''
        }`}
      >
        <Wrapped {...props} />
      </div>
    );
  };
};

export default withFormula;
