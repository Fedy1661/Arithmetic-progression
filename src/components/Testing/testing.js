import React, { Component } from 'react';
import { generateTest, nextQuestion } from '../../actions';
import { connect } from 'react-redux';

class Testing extends Component {
  componentDidMount() {
    this.props.generateTest();
  }
  render() {
    const { test, actualQuestion, rightAnswers } = this.props;
    const questions = actualQuestion !== null && actualQuestion !== 4 && (
      <>
        <h2 className="testing__title">Тестирование</h2>
        <h3 className="testing__question title">
          {`${test[actualQuestion].question} #${actualQuestion+1}`}
        </h3>
        <div className="testing__variants">
          {test[actualQuestion].variants.map((value, key) => {
            return React.cloneElement(value[0], {
              key,
              id: key,
              canSelect: true
            });
          })}
          <button onClick={this.props.nextQuestion} className="btn">
            {actualQuestion !== 3 ? 'Дальше' : 'Результат'}
          </button>
        </div>
      </>
    );
    const result = actualQuestion === 4 && (
    <h2 className="testing__title">{`Результат ${rightAnswers}/${test.length}`}</h2>
    );
    return (
      <div className="testing">
        {questions}
        {result}
      </div>
    );
  }
}
const mapStateToProps = ({ test, actualQuestion, rightAnswers }) => {
  return { test, actualQuestion, rightAnswers };
};
const mapDispatchToProps = {
  generateTest,
  nextQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(Testing);
