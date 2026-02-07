import { useContext } from 'react';
import { UserContext } from './ComponentA';

function ComponentC() {
  const name = useContext(UserContext);

  return (
    <div className="border">
      <p>Component C</p>
      <p>{name}</p>
    </div>
  );
}

export default ComponentC;
