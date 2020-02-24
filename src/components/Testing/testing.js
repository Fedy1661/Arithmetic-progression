import React, { Component, Fragment } from 'react';
import { generateTest, nextQuestion } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Testing extends Component {
  state = {
    redirect: false
  };
  componentDidMount() {
    this.props.generateTest();
  }
  render() {
    const {
      test,
      actualQuestion,
      rightAnswers,
      generateTest,
      answers
    } = this.props;
    const { redirect } = this.state;
    const questions = actualQuestion !== null && actualQuestion !== 4 && (
      <>
        <h2 className="testing__title">Тестирование</h2>
        <h3 className="testing__question title">
          {`${test[actualQuestion].question} #${actualQuestion + 1}`}
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
      <>
        <h2 className="testing__title">{`Результат ${rightAnswers}/${test.length}`}</h2>
        {test.map((testValue, testId) => {
          return (
            <Fragment key={testId}>
              <h3 className="testing__question title">
                {`${testValue.question} #${test.indexOf(testValue) + 1}`}
              </h3>
              <div className="testing__variants">
                {testValue.variants.map((value, key) => {
                  let selected = false;
                  if (answers[testId].indexOf(key) !== -1) {
                    selected = true;
                  }
                  return React.cloneElement(value[0], {
                    key,
                    id: key,
                    status: value[1],
                    selected
                  });
                })}
              </div>
            </Fragment>
          );
        })}
        <button onClick={generateTest} className="testing__btn btn">
          Заново
        </button>
        <button
          onClick={() => this.setState({ redirect: true })}
          className="testing__btn btn"
        >
          Формулы
        </button>
      </>
    );
    return (
      <div className="testing">
        {questions}
        {result}
        {redirect && <Redirect to="/" />}
      </div>
    );
  }
}
const mapStateToProps = ({ test, actualQuestion, rightAnswers, answers }) => {
  return { test, actualQuestion, rightAnswers, answers };
};
const mapDispatchToProps = {
  generateTest,
  nextQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(Testing);
