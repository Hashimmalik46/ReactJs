import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div className="border">
      <p>Component B</p>
      <ComponentC/>
    </div>
  );
}
export default ComponentB;