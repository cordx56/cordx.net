import React, { useState, useEffect } from "react";
import axios from "axios";

interface State {
  name: string;
  login: string;
}

const Profile: React.FC = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = () => {
    axios
      .get("https://api.github.com/users/cordx56")
      .then((response) => {
        setName(response.data.name);
        setLogin(response.data.login);
      })
      .catch((error) => {
        window.alert(error);
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-light">{name}</h1>
      <h5 className="text-lg text-gray-700">@{login}</h5>
    </div>
  );
};

export default Profile;
