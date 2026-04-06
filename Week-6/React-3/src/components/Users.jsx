import { useEffect, useState } from "react";

function Users({ onAddUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.slice(0, 4)))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="bg-pink-400 min-h-screen flex justify-center items-center">
      
      {/* Outer Box */}
      <div className="border-4 border-black rounded-3xl p-10 bg-pink-300">
        
        {/* ONE ROW */}
        <div className="flex gap-6">
          
          {users.map((user, index) => (
            <div
              key={user.id}
              className="text-center p-5 border-4 text-xl bg-green-300 border-blue-700 rounded-2xl w-60"
            >
              <h2 className="font-bold font-serif">
                User-{index + 1}
              </h2>

              <p className="text-sm">{user.name}</p>

              <button
                onClick={onAddUser}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl mt-3"
              >
                Add User
              </button>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Users;