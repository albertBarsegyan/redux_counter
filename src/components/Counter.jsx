import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../libs/store/features/counter";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const handleInc = () => {
    dispatch(increment());
  };

  return (
    <div>
      {count}
      <button onClick={handleInc}>+</button>
    </div>
  );
}
