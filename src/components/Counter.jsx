import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  setStep,
  setMax,
  setMin,
} from '../libs/store/features/counter';
import AddList from './addList';

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
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('enter press here! ');
    }
  };

  return (
    <div className="my-5">
      <div className="flex items-center justify-center">
        <p className="w-1/6 text-4xl text-green-500 border border-green-500 p-4">
          {count}
        </p>
      </div>
      <div className="my-2">
        <span className="text-green-500 px-2 py-3 text-sm border border-green-500">
          {step}
        </span>
        <input
          onBlur={setStepValue}
          type="text"
          ref={stepInput}
          className="text-sm py-3 mx-2 border border-green-500 text-green-500 outline-none"
        />
        <button
          className="border border-green-500 text-green-500 px-4 py-2"
          type="button"
          onClick={setStepValue}
        >
          Add Step
        </button>
      </div>
      <div className="my-2">
        <span className="text-green-500 px-2 py-3 border border-green-500">
          {max}
        </span>
        <input
          type="text"
          ref={maxInput}
          onBlur={setMaxValue}
          className="text-sm py-3 mx-2 border border-green-500 text-green-500 outline-none"
        />
        <button
          className="border border-green-500 text-green-500 px-4 py-2"
          type="button"
          onClick={setMaxValue}
        >
          Set max
        </button>
      </div>
      <div className="my-2">
        <span className="text-green-500 border-green-500 border px-2 py-3 text-sm">
          {min}
        </span>
        <input
          type="text"
          ref={minInput}
          onBlur={setMinValue}
          className="text-sm py-3 mx-2 border border-green-500 text-green-500 outline-none"
        />
        <button
          className="border border-green-500 text-green-500 px-4 py-2"
          type="button"
          onClick={setMinValue}
        >
          Set min
        </button>
      </div>
      <div>
        <button
          onClick={handleInc}
          className="border border-green-500 text-green-500 px-4 py-2"
        >
          +
        </button>
        <button
          onClick={handleDec}
          className="border border-green-500 text-green-500 px-4 py-2"
        >
          -
        </button>
      </div>
      <AddList />
    </div>
  );
}
