
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold underline mb-4">Counter App</h1>
      <p className="text-3xl font-semibold text-center">Count: {count}</p>
      <div className="flex items-center justify-between gap-2 mt-2">
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-2 rounded-md"
          onClick={()=> setCount(count-1)}
        >Decrement</button>
        <button 
         onClick={()=> setCount(count+1)}
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-2 rounded-md">Increment</button>
      </div>
    </div>
  );
}

export default App;