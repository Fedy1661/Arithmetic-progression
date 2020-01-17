import React from 'react';
import { Link } from 'react-router-dom';
import correctUrl from '../HOC/correctUrl';

const Formulae = () => {
  return (
    <div className="formulae">
      <div className="formulae__block">
        <h2 className="formulae__title">
          Формула n-го члена а.п
    </h2>
        <div className="formulae__wrapper">
          <div className="formulae__formula">
            <div className="">a<sub>n</sub> = a<sub>1</sub> + (n - 1)d</div>
          </div>
        </div>
      </div>
      <div className="formulae__block">
        <h2 className="formulae__title">
          Формула разности а.п
    </h2>
        <div className="formulae__wrapper">
          <div className="formulae__formula">
            <div className="">
              d = a<sub>n</sub> - a<sub>n-1</sub>
            </div>
          </div>
          <div className="formulae__formula">
            <div className="">
              d = a<sub>2</sub> - a<sub>1</sub>
            </div>
          </div>
        </div>
      </div>
      <div className="formulae__block">
        <h2 className="formulae__title">
          Формула, объясняющая название а.п
        </h2>
        <div className="formulae__wrapper">
          <div className="formulae__formula">
            <div className="">a<sub>n</sub> =</div>
            <span className="fraction">
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
            <div className="">S<sub>n</sub> =</div>
            <span className="fraction">
              <span className="top">a<sub>1</sub> + a<sub>n</sub></span>
              <span className="bottom">2</span>
            </span> × n
      </div>
          <div className="formulae__formula">
            <div className="">S<sub>n</sub> =</div>
            <span className="fraction">
              <span className="top">2a<sub>1</sub> + (n - 1)d</span>
              <span className="bottom">2</span>
            </span> × n
      </div>
        </div>
      </div>
      <Link to={location => correctUrl(location.pathname, 'test')}
        className="btn">Тест</Link>
    </div>
  )
}

export default Formulae;