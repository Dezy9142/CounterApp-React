import React from "react";
import Counter from "./components/Counter";
import { useState } from "react";


const App = () => {

  const [count ,setCount]=useState(0);
  function resetHandler(){
    setCount(0)
  }
  
  return (<div  className="wrapper  flex-col  text-white w-[100vw] h-[100vh] bg-gradient-to-tr from-sky-900
   to-gray-500 flex justify-center items-center  ">
   <h1 className="text-[#002244] text-4xl font-semibold ">Increament and Decreament</h1>
   <Counter  count={count} setCount={setCount}/>
   <button  onClick={resetHandler} className="text-white hover:scale-[1.1] duration-300 bg-[#002244] rounded py-2 px-10 text-2xl ">reset</button>
  </div>);
};

export default App;
