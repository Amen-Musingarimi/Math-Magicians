import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const clickHandler = (buttonName) => {
    const result = calculate(state, buttonName);
    setState(result);
  };
  return (
    <div className="calc-container">
      <h2>Let us do some math!</h2>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operant">
            <span className="number">{state.total}</span>
            <span className="math-symbol">{state.operation}</span>
          </div>
          <div className="current-operant">{state.next || '0'}</div>
        </div>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('AC')}
        >
          AC
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('+/-')}
        >
          +/-
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('%')}
        >
          %
        </button>
        <button
          type="button"
          className="orange"
          onClick={() => clickHandler('÷')}
        >
          ÷
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('7')}
        >
          7
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('8')}
        >
          8
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('9')}
        >
          9
        </button>
        <button
          type="button"
          className="orange multiply"
          onClick={() => clickHandler('x')}
        >
          x
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('4')}
        >
          4
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('5')}
        >
          5
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('6')}
        >
          6
        </button>
        <button
          type="button"
          className="orange"
          onClick={() => clickHandler('-')}
        >
          -
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('1')}
        >
          1
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('2')}
        >
          2
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('3')}
        >
          3
        </button>
        <button
          type="button"
          className="orange"
          onClick={() => clickHandler('+')}
        >
          +
        </button>
        <button
          type="button"
          className="span-two gray"
          onClick={() => clickHandler('0')}
        >
          0
        </button>
        <button
          type="button"
          className="gray"
          onClick={() => clickHandler('.')}
        >
          .
        </button>
        <button
          type="button"
          className="orange"
          onClick={() => clickHandler('=')}
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;
