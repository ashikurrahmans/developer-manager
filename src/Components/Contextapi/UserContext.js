import { createContext } from "react";

const UsersContext = createContext();

const UserContextProvider = ({ children }) => {
  <UsersContext.Provider>{children}</UsersContext.Provider>;
};

export default UserContextProvider;
