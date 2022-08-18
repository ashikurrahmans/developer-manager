import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import AddContacts from "./Components/AddContacts";
import Navbar from "./Components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import SingleContact from "./Components/SingleContact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/addcontacts" element={<AddContacts />} />
        <Route path="/contacts/:id" element={<SingleContact />} />
      </Routes>
    </>
  );
}

export default App;
