function List({itemList=[],category="Items"}) {

  const list=itemList.map(item => (
    <li key={item.id}>
      {item.name}: &nbsp;<b>{item.calories}</b>
    </li>
   
  ));
  return (
    <>
      <div className="w-50 h-50 p-5 ml-5">
        <h1 className="text-2xl font-bold mb-3 border text-center bg-amber-200">{category}</h1>
        <ol className="list-decimal pl-5 text-xl border">{list}</ol>
      </div>
    </>
  );
}
export default List;
