import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>−</button>
    </div>
  );
}

export default App;

//if the + button was replaced with the floowing code what do u think the ouput would be 
{/*<button onClick={() => {
  setCount(count + 1);
  setCount(count + 1);
  setCount(count + 1);
}}>+</button>*/}

//if we want our state to depend on the previous state we write as below

{ /* <button onClick={() => {
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
  setCount((prev) => prev + 1);
}}>+</button> */}