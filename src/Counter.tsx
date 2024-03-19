import React from "react";
import { counter } from "../singletons/Counter";

function Counter(): JSX.Element {
  const [state, stateSet] = React.useState(counter.getCount());
  return (
    <>
      <button onClick={() => stateSet(counter.increment())}>+</button>
      <span>{state}</span>
      <button onClick={() => stateSet(counter.decrement())}>-</button>
    </>
  );
}

export default Counter;
