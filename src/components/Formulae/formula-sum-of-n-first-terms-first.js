import React from 'react';
import { connect } from 'react-redux';
import { selectAnswer } from '../../actions';
import { compose } from '../../util';
import { withFormula } from '../HOC';

const formula = props => {
  return (
    <>
      <div className="">
        S<sub>n</sub> =
      </div>
      <span className="fraction">
        <span className="top">
          a<sub>1</sub> + a<sub>n</sub>
        </span>
        <span className="bottom">2</span>
      </span>{' '}
      × n
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
