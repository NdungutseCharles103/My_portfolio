import React, {useRef} from 'react'

const UseRefEx = () =>{
  
  let usernameRefs = useRef([]);
  
  usernameRefs.current = [0,0,0,0].map(
      (ref, index) =>   usernameRefs.current[index] = React.createref()
    )
  
  const handleCopyUsername = (e, index) => {
    usernameRefs.current[index].current.select();
    document.execCommand("copy");
  };
  
  return( 
     <div>{
     [0,0,0,0].map((el, index)=> { 
      return (
        <div>
          <input type="text" readonly ref={usernameRefs.current[index]} value={index} />
          <button onClick={handleCopyUsername}>Click to copy text </button> 
        </div>
        )}
      ) } 
     </div>
  
  )
  
}

export default UseRefEx;