import { useState } from "react";
import Users from "./components/Users";
import UserCount from "./components/UserCount";

function App() {
  const [count, setCount] = useState(0);

  const handleAddUser = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <UserCount count={count} />
      <Users onAddUser={handleAddUser} />
    </div>
  );
}

export default App;