import ComponentB from './ComponentB';
import { createContext } from 'react';

export const UserContext = createContext();
function ComponentA({ name }) {
  return (
    <div className="border">
      <p>Component A</p>
      <p>{name}</p>
      <UserContext.Provider value={name}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}
export default ComponentA;
