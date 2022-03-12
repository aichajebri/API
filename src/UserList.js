import axios from "axios";
import React from "react";
import "./UserList.css";
const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function UserList() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setUsers(response.data);
    });
  }, []);

  if (!users) return null;

  return (
    <div className="UserList">
      <h1>ALL USERS</h1>
      {users.map((u) => (
        <div key={u.id}>
          <div className="">
            <div className="">
              <p>Name :{u.name}</p>
              <p>Username : {u.username}</p>
              <p>Email : {u.email}</p>

              <div className="">
                <p>Street :{u.address.street}</p>
                <p>Suite :{u.address.suite}</p>
                <p>City : {u.address.city}</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
