"use client";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([
    {
      id: uuidv4(),
      login: "Fortes",
      password: "123",
      createdAt: new Date(),
    },
  ]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addUser = (login, password) => {
    const newUser = {
      id: uuidv4(),
      login,
      password,
      createdAt: new Date(),
    };
    setUsers([...users, newUser]);
  };

  const updateUser = (id, login, password) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, login, password } : user
      )
    );
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const validateLogin = (login, password) => {
    const isValid = users.some(
      (user) => user.login === login && user.password === password
    );
    setIsAuthenticated(isValid);
    return isValid;
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        addUser,
        updateUser,
        deleteUser,
        validateLogin,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUsers = () => useContext(UserContext);
