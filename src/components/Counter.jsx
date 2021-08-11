import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  setStep,
  setMax,
  setMin,
} from '../libs/store/features/counter';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const step = useSelector((state) => state.counter.step);
  const min = useSelector((state) => state.counter.min);
  const max = useSelector((state) => state.counter.max);
  const stepInput = useRef(null);
  const maxInput = useRef(null);
  const minInput = useRef(null);
  const handleInc = () => {
    dispatch(increment());
  };
  const handleDec = () => {
    dispatch(decrement());
  };
  const setStepValue = () => {
    const inputValue = stepInput.current.value;
    const inputValid = inputValue.length > 0 ? Number(inputValue) : 1;
    dispatch(setStep(inputValid));
  };
  const setMaxValue = () => {
    const inputValue = maxInput.current.value;
    const inputValid = inputValue.length > 0 ? Number(inputValue) : 100;
    dispatch(setMax(inputValid));
  };
  const setMinValue = () => {
    const inputValue = minInput.current.value;
    const inputValid = inputValue.length > 0 ? Number(inputValue) : 0;
    dispatch(setMin(inputValid));
  };

  return (
    <div>
      {count}
      <div>
        <span>{step}</span>
        <input type="text" ref={stepInput} />
        <button type="button" onClick={setStepValue}>
          Add Step
        </button>
      </div>
      <div>
        <span>{max}</span>
        <input type="text" ref={maxInput} />
        <button type="button" onClick={setMaxValue}>
          Set max
        </button>
      </div>
      <div>
        <span>{min}</span>
        <input type="text" ref={minInput} />
        <button type="button" onClick={setMinValue}>
          Set min
        </button>
      </div>
      <div>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
      </div>
    </div>
  );
}
