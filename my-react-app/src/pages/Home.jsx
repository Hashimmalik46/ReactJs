import Nav from '../components/Nav.jsx';
import Card from '../components/Card.jsx';
import List from '../components/List.jsx';
import Button from '../components/Button.jsx';
import Counter from '../components/Counter.jsx';
import MyComponent from '../components/MyComponent.jsx';
import ColorPicker from '../components/ColorPicker.jsx';
import FavouriteCar from '../components/FavouriteCar.jsx';
import FruitList from '../components/FruitList.jsx';
import CarList from '../components/CarList.jsx';
import MyComponent2 from '../components/MyComponent2.jsx';
import Resize from '../components/Resize.jsx';
function Home() {
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
      <Resize/>
      <div className="w-full flex mt-20 justify-around">
        <Card name="Hashim Malik" desc="A Passionate developer and designer." />
        <Card name="John" desc="Web Developer" />
        <Card />
      </div>
      <Counter />
      <div className="w-full flex items-center justify-around">
        <MyComponent />
        <CarList />
      <MyComponent2/>
      </div>
      <div className="flex items-center justify-around">
        <ColorPicker />
        <FavouriteCar />
        <FruitList />
      </div>

      <div className="w-full flex justify-around">
        <List itemList={fruits} category="Fruits" />
        <List itemList={vegetables} category="Vegetables" />
        <List />
      </div>
    </>
  );
}
export default Home;
