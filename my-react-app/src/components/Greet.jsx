function Greet({ name, isTm = false }) {
  const m1 = `Welcome ${name}`;
  const m2 = `Let's Lock In!`;

  return isTm ? (
    <div>
      <p className="text-2xl font-semibold text-center">{name}</p>
      <p className="font-handwriting">{m2}</p>
    </div>
  ) : (
    <p className="text-2xl font-medium">{m1}!</p>
  );
}
export default Greet;
