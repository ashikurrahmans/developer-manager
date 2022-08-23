import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import AddContacts from "./Components/AddContacts";
import Navbar from "./Components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import SingleContact from "./Components/SingleContact";
import { useContext } from "react";
import EditContacts from "./Components/EditContacts";
import { usersContext } from "./Components/contextapi/UserContext";

function App() {
  const { contacts } = useContext(usersContext);

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/addcontacts" element={<AddContacts />} />
        <Route path="/editcontacts/:id" element={<EditContacts />} />
        <Route
          path="/contacts/:id"
          element={
            <SingleContact
              contacts={contacts}
              // deleteContact={deleteContact}
              // updateContact={updateContact}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
