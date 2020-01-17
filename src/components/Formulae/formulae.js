import React from 'react';
import { Link } from 'react-router-dom';
import correctUrl from '../HOC/correctUrl';
import {
  FormulaNthTerm,
  FormulaDifferenceFirst,
  FormulaDifferenceSecond,
  FormulaExplainsName,
  FormulaSumOfNFirstTermsFirst,
  FormulaSumOfNFirstTermsSecond
} from '.';

const Formulae = () => {
  return (
    <div className="formulae">
      <div className="formulae__block">
        <h2 className="formulae__title title">Формула n-го члена а.п</h2>
        <div className="formulae__wrapper">
          <FormulaNthTerm />
        </div>
      </div>
      <div className="formulae__block">
        <h2 className="formulae__title title">Формула разности а.п</h2>
        <div className="formulae__wrapper">
          <FormulaDifferenceFirst />
          <FormulaDifferenceSecond />
        </div>
      </div>
      <div className="formulae__block">
        <h2 className="formulae__title title">
          Формула, объясняющая название а.п
        </h2>
        <div className="formulae__wrapper">
          <FormulaExplainsName />
        </div>
      </div>
      <div className="formulae__block">
        <h2 className="formulae__title title">
          Формула суммы n-первых членов а.п
        </h2>
        <div className="formulae__wrapper">
          <FormulaSumOfNFirstTermsFirst />
          <FormulaSumOfNFirstTermsSecond />
        </div>
      </div>
      <Link
        to={location => correctUrl(location.pathname, 'test')}
        className="btn"
      >
        Тест
      </Link>
    </div>
  );
};

export default Formulae;
