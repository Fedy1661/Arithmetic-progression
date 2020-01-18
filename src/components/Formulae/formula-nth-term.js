import React from 'react';
import { connect } from 'react-redux';
import { selectAnswer } from '../../actions';
import { compose } from '../../util';
import { withFormula } from '../HOC';

const formula = () => {
  return (
    <div className="">
      a<sub>n</sub> = a<sub>1</sub> + (n - 1)d
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
