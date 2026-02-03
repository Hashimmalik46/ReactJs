import Nav from './Nav.jsx';
import Card from './Card.jsx';
import List from './List.jsx';
import Button from './Button.jsx';
import Counter from './Counter.jsx';
import MyComponent from './MyComponent.jsx';

function App() {
  const fruits = [
    { id: 1, name: 'Apple', calories: 20 },
    { id: 2, name: 'Mango', calories: 40 },
    {
      id: 3,
      name: 'Banana',
      calories: 60,
    },
    {
      id: 4,
      name: 'Pineapple',
      calories: 80,
    },
  ];
  const vegetables = [
    { id: 1, name: 'Cabbage', calories: 20 },
    { id: 2, name: 'Potato', calories: 40 },
    {
      id: 3,
      name: 'Spinach',
      calories: 60,
    },
    {
      id: 4,
      name: 'Carrot',
      calories: 80,
    },
  ];
  return (
    <>
      <Nav />
      <Button />
      <div className="w-full flex mt-20 justify-around">
        <Card name="Hashim Malik" desc="A Passionate developer and designer." />
        <Card name="John" desc="Web Developer" />
        <Card />
      </div>
      <Counter />
      <MyComponent/>
      <div className='w-full flex justify-around'> 
        <List itemList={fruits} category="Fruits" />
        <List itemList={vegetables} category="Vegetables" />
        <List />
      </div>
    </>
  );
}

export default App;
