function Button() {
  let count=0
  const handleClick = (name) => {
    if(count<3){
      count++
      console.log(`${name} clicked me ${count} time/s!`)
    }else{
      console.log(`${name} stop clicking mee!`)
    }
  };
  const handleClick1 =(e)=>{
    e.target.textContent="Ouchh!"
  }
  return (
    <button className="bg-gray-900 text-white w-30 rounded p-3 ml-5 mt-10 cursor-pointer" onClick={(e)=>handleClick1(e)}>
      Hello 😊
    </button>
  );
}
export default Button;
