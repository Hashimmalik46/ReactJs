import Nav from './Nav.jsx';
import Card from './Card.jsx';
import List from './List.jsx';

function App() {
  return (
    <>
      <Nav />
      <div className="w-full flex mt-20 justify-around">
        <Card name="Hashim Malik" desc="A Passionate developer and designer." />
        <Card name="John" desc="Web Developer" />
        <Card />
      </div>
      <List />
    </>
  );
}

export default App;
