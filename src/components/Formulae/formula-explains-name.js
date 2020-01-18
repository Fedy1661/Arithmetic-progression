import React from 'react';
import { connect } from 'react-redux';
import { selectAnswer } from '../../actions';
import { compose } from '../../util';
import { withFormula } from '../HOC';

const formula = () => {
  return (
    <>
      <div className="">
        a<sub>n</sub> =
      </div>
      <span className="fraction">
        <span className="top">
          a<sub>n-1</sub> + a<sub>n+1</sub>
        </span>
        <span className="bottom">2</span>
      </span>
    </>
  );
};

const mapStateToProps = ({ selectedAnswers }) => {
  return { selectedAnswers };
};

const mapDispatchToProps = {
  selectAnswer
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFormula
)(formula);
