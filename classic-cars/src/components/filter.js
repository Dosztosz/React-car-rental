import React, { useState } from "react";

function Filter() {
  const users = [
    { name: "John", age: 25 },
    { name: "Mary", age: 30 },
    { name: "Jane", age: 20 },
    { name: "Bob", age: 35 },
  ];

  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleFilter = (event) => {
    const value = event.target.value;
    const filtered = users.filter((user) => user.name.includes(value));
    setFilteredUsers(filtered);
  };

  return (
    <div>
      <input type="text" onChange={handleFilter} />
      {filteredUsers.map((user) => (
        <div key={user.name}>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}

export default Filter;