import React from 'react';
import { connect } from 'react-redux';
import { selectAnswer } from '../../actions';
import { compose } from '../../util';
import { withFormula } from '../HOC';

const formula = () => {
  return (
    <div className="">
      d = a<sub>2</sub> - a<sub>1</sub>
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
