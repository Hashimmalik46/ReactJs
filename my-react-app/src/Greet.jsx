function Greet({ name, isLogged = false }) {
  const m1 = `Welcome ${name}!`;
  const m2 = `Please Login first...`;
  return <p className="text-xl font-bold">{isLogged ? m1 : m2}</p>;
}
export default Greet;
