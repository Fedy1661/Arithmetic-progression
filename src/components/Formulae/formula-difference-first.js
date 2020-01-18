import React from 'react';
import { withFormula } from '../HOC';
import { connect } from 'react-redux';
import { selectAnswer } from '../../actions';
import { compose } from '../../util';

const formula = () => {
  return (
    <div className="">
      d = a<sub>n</sub> - a<sub>n-1</sub>
    </div>
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
