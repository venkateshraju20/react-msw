import React, { useEffect, useState } from "react";
const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((res) => {
        setUsers(res.map((data: any) => data.name));
        setError(null);
      })
      .catch(() => {
        setError("Error fetching users");
        setUsers([]);
      });
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>{users && users.map((user) => <li key={user}>{user}</li>)}</ul>
    </div>
  );
};
export default Users;
