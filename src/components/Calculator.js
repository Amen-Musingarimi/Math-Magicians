import './Calculator.css';
import React from 'react';

const Calculator = () => (
  <div className="calculator-grid">
    <div className="output">
      <div className="previous-operant">
        <span className="number">14</span>
        <span className="math-symbol">x</span>
      </div>
      <div className="current-operant">0</div>
    </div>
    <button type="button" className="gray">
      AC
    </button>
    <button type="button" className="gray">
      +/-
    </button>
    <button type="button" className="gray">
      %
    </button>
    <button type="button" className="orange">
      ÷
    </button>
    <button type="button" className="gray">
      7
    </button>
    <button type="button" className="gray">
      8
    </button>
    <button type="button" className="gray">
      9
    </button>
    <button type="button" className="orange">
      X
    </button>
    <button type="button" className="gray">
      4
    </button>
    <button type="button" className="gray">
      5
    </button>
    <button type="button" className="gray">
      6
    </button>
    <button type="button" className="orange">
      -
    </button>
    <button type="button" className="gray">
      1
    </button>
    <button type="button" className="gray">
      2
    </button>
    <button type="button" className="gray">
      3
    </button>
    <button type="button" className="orange">
      +
    </button>
    <button type="button" className="span-two gray">
      0
    </button>
    <button type="button" className="gray">
      .
    </button>
    <button type="button" className="orange">
      =
    </button>
  </div>
);

export default Calculator;
