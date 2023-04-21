


function Counter(props) {
    const count =props.count;
    const setCount=props.setCount
  
     function incHandler(){
         setCount(count+1);
       
     }
     function decHandler(){
         setCount(count-1);
     }
   return (
     <div>
        <div className='flex  text-[#303a44] py-3 px-4 m-6 border-2 rounded justify-center items-center'>
        <button onClick={decHandler} className="bg-[#F0F8FF] py-1 px-4 rounded text-5xl">-</button>
         <div className="bg-[#F0F8FF] py-1 px-4  text-3xl">{count}</div>
         <button onClick={incHandler} className="bg-[#F0F8FF] py-1 px-4 rounded text-5xl ">+</button>
        </div>
 
       
     </div>
   )
 
 };
 
 export default Counter