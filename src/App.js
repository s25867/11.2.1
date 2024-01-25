import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const response = await axios.get('https://randomuser.me/api');
    setUser(response.data.results[0]);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {user && (
        <div>
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>{user.email}</p>
          <img src={user.picture.large} alt="User" />
        </div>
      )}
      <button onClick={fetchUser}>Generate new user</button>
    </div>
  );
}

export default App;