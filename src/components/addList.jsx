import { useRef } from 'react';
import { array } from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addText } from '../libs/store/features/textListSlice';
export default function AddList() {
  const dispatch = useDispatch();
  const textInputRef = useRef(null);
  const textList = useSelector((state) => state.textList.list);
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value.length > 0) {
        dispatch(addText(event.target.value));
        event.target.value = '';
      }
    }
  };

  return (
    <div className="my-5">
      <div>
        <input
          onKeyPress={handleKeyPress}
          className="border border-green-500 text-green-500 px-4 py-2"
          type="text"
          ref={textInputRef}
        />
        <button
          className="border border-green-500 text-green-500 px-4 py-2"
          type="button"
          onClick={() => {
            dispatch(addText(textInputRef.current.value));
            textInputRef.current.value = '';
          }}
        >
          Add
        </button>
      </div>
      <div className="my-5">
        <ul className="flex flex-col items-center justify-center">
          {textList.length > 0
            ? textList.map((text, index) => {
                return (
                  <li
                    key={index}
                    className="my-2 w-3/4 px-2 py-5 text-green-500 border border-green-500"
                  >
                    {text}
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}
