import {useState, useEffect} from 'react'
type ElementSize ={
  width:number;
  height:number;
}
function useElementSize(el):ElementSize{
  const [elSize, setElSize] = useState<ElementSize>({
    width:0,
    height:0
  })
    useEffect(()=>{
      setElSize({ width: document.querySelector(el).clientWidth, height: document.querySelector(el).clientHeight })
    console.log(elSize)
    },[])


  return elSize
}

export default useElementSize