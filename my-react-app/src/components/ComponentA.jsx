import ComponentB from "./ComponentB";

function ComponentA({name}) {
  return (
    <div className="border">
      <p>Component A</p>
      <p>{name}</p>
      <ComponentB/>
    </div>
  );
}
export default ComponentA;
