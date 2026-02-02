function List() {
  const fruits = [
    { id: 1, name: 'Apple', calories: 20 },
    { id: 1, name: 'Mango', calories: 40 },
    {
      id: 1,
      name: 'Banana',
      calories: 60,
    },
    {
      id: 1,
      name: 'Pineapple',
      calories: 80,
    },
  ];
  const fruitList = fruits.map(fruit => (
    <li>
      {fruit.name}: &nbsp;<b>{fruit.calories}</b>
    </li>
  ));
  return (
    <>
      <div className="w-50 h-50 p-5 ml-5">
        <h1 className="text-2xl font-bold mb-3 border text-center bg-amber-200">Fruits</h1>
        <ol className="list-decimal pl-5 text-xl border">{fruitList}</ol>
      </div>
    </>
  );
}
export default List;
