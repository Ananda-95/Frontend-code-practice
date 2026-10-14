import { useState } from "react";
import {increment, decrement, reset, incrementByAmount, incrementByInput, decrementByInput} from "../counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";
const Count = () => {

  const count = useSelector((state)=>state.counter.count);

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  return(
  <>
  {
    count
  }
  <input type="text" name="input" value={search} onChange={(e) =>setSearch(e.target.value)} />
  <button onClick={()=>dispatch(increment())}>Increment</button>
  <button onClick={()=>dispatch(decrement())}>Decrement</button>
  <button onClick={()=>dispatch(reset())}>Reset</button>
  <button onClick={()=>dispatch(incrementByAmount(5))}>Increment by 5</button>
  <button onClick={()=>dispatch(incrementByInput(Number(search)))}>IncrementByInput</button>
  <button onClick={()=>dispatch(decrementByInput(Number(search)))}>IncrementByInput</button>
  </>
  )

}

export default Count