import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    document.querySelectorAll('.fraction').forEach(function (key) {
      const split = key.innerHTML.split("//")
      console.log(key.innerHTML)
      console.log(split)
      if (split.length === 2) {
        key.innerHTML = `<span class="top">${split[0]}</span><span class="bottom">${split[1]}</span>`
      }
    });

  }
  render() {
    return (
      <div className="container">
        <h1 className="title">Арифмитическая прогрессия</h1>
        <hr />
        <div className="formulae">
          <div className="formulae__block">
            <h2 className="formulae__title">
              Формула n-го члена а.п
            </h2>
            <div className="formulae__formula">
              a<sub>n</sub> = a<sub>1</sub> + (n - 1)d
          </div>
          </div>
          <div className="formulae__block">
            <h2 className="formulae__title">
              Формула разности а.п
            </h2>
            <div className="formulae__wrapper">
              <div className="formulae__formula">
                d = a<sub>n</sub> - a<sub>n-1</sub>
              </div>
              <div className="formulae__formula">
                d = a<sub>2</sub> - a<sub>1</sub>
              </div>
            </div>
          </div>
          <div className="formulae__block">
            <h2 className="formulae__title">
              Формула, объясняющая название а.п
            </h2>
            <div className="formulae__wrapper">
              <div className="formulae__formula">
                a<sub>n</sub> = <span className="fraction">
                  <span className="top">a<sub>n-1</sub> + a<sub>n+1</sub></span>
                  <span className="bottom">2</span>
                </span>
              </div>
            </div>
          </div>
          <div className="formulae__block">
            <h2 className="formulae__title">
              Формула суммы n-первых членов а.п
            </h2>
            <div className="formulae__wrapper">
              <div className="formulae__formula">
                S<sub>n</sub> =
                <span className="fraction">
                  <span className="top">a<sub>1</sub> + a<sub>n</sub></span>
                  <span className="bottom">2</span>
                </span> × n
              </div>
              <div className="formulae__formula">
                S<sub>n</sub> =
                <span className="fraction">
                  <span className="top">2a<sub>1</sub> + (n - 1)d</span>
                  <span className="bottom">2</span>
                </span> × n
              </div>
            </div>
          </div>
          <a href='#' className="btn">Тест</a>
        </div>
      </div>
    )
  }
}

export default App;