import { useEffect, useState } from 'react';

function Resize() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setwidth] = useState(window.innerWidth);
  function handleResize() {
    setHeight(window.innerHeight);
    setwidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
     //without useEffect the event listener will be attached multiple times but here im attaching it on mount.
     console.log("event listener attached")
     return ()=>{
      //Cleanup
      window.removeEventListener('resize',handleResize)
      console.log("event listener removed")
     }
  },[]);

  // useEffect(()=>{
  //   document.title=(`Size: ${width} X ${height}`)
  // },[width,height])

  return (
    <div className="ml-20 mt-5">
      <p>Height: {height}</p>
      <p>Width: {width}</p>
    </div>
  );
}
export default Resize;
