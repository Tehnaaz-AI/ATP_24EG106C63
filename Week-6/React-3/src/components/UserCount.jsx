import { useContext } from "react";
import { userContextObj } from "./ContextProvider";

function UserCount() {
  const { count } = useContext(userContextObj);

  return (
    <div className="bg-pink-300 p-5 rounded-xl text-3xl w-65 border-amber-500 border-4 font-semibold">
      Users Added: {count}
    </div>
  );
}

export default UserCount;