import { useEffect, useState, useContext } from "react";
import { userContextObj } from "./ContextProvider";
import UserCount from "./UserCount";

function Users() {
  const [users, setUsers] = useState([]);
  const { increment } = useContext(userContextObj);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.slice(0, 4)))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="min-h-screen p-50 bg-red-500 ">

      {/* User Count (inside same main div) */}

      <div className="flex justify-center w-full">
        <UserCount />
      </div>

      {/* Cards Row */}
      <div className="flex gap-6 mt-10">
        {users.map((user, index) => (
          <div
            key={user.id}
            className="bg-green-300 rounded-2xl border-4 border-amber-500 p-5 text-center w-60"
          >
            <h1 className="font-bold text-lg">
              User-{index + 1}
            </h1>

            <p className="text-black-600 mt-2 font-medium">
              {user.name}
            </p>

            <button
              onClick={increment}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
            >
              Add User
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Users;