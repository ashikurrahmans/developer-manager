import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import Contacts from "./Components/Contacts";
import AddContacts from "./Components/AddContacts";
import Navbar from "./Components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import SingleContact from "./Components/SingleContact";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import EditContacts from "./Components/EditContacts";

const ourcontacts = [
  {
    id: "1",
    firstName: "Ashikur",
    lastName: "Rahman",
    email: "ashiqur.dream@gmail.com",
    phone: "01784910111",
    dateOfBirth: "2/1/1930",
    profession: "Web Developer",
    url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
    gender: "male",
    bio: "Hello how are you?",
  },
  {
    id: "2",
    firstName: "Rahul",
    lastName: "Rahman",
    email: "rahul.dream@gmail.com",
    phone: "01683486010",
    dateOfBirth: "2/3/200",
    profession: "Software Developer",
    url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
    gender: "male",
    bio: "Hello how are you?",
  },
  {
    id: "3",
    firstName: "Sofiqur",
    lastName: "Rahman",
    email: "sofiqur@gmail.com",
    phone: "01684436011",
    dateOfBirth: "1/8/1995",
    profession: "Web Developer",
    url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
    gender: "male",
    bio: "Hello how are you?",
  },
  {
    id: "4",
    firstName: "Sadekur",
    lastName: "Rahman",
    email: "sadequr@gmail.com",
    phone: "01682386010",
    dateOfBirth: "2/4/1991",
    profession: "Web Developer",
    url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
    gender: "male",
    bio: "Hello how are you?",
  },
  {
    id: "5",
    firstName: "Pabel",
    lastName: "Hasan",
    email: "pabelhasan@gmail.com",
    phone: "01684486010",
    dateOfBirth: "2/8/1992",
    profession: "Graphics Designer",
    url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
    gender: "male",
    bio: "Hello how are you?",
  },
  {
    id: "6",
    firstName: "Shaon",
    lastName: "Rahman",
    email: "shaon@gmail.com",
    phone: "01684986010",
    dateOfBirth: "2/8/1994",
    profession: "Web Designer",
    url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
    gender: "female",
    bio: "Hello how are you?",
  },
];

function App() {
  const [contacts, setContacts] = useState(ourcontacts);

  const deleteContact = (id) => {
    const deleteContact = contacts.filter((contact) => contact.id !== id);
    setContacts(deleteContact);
  };

  const updateContact = (id) => {
    console.log(id);
  };

  const addContact = (contact) => {
    let contactToAdd = {
      id: uuidv4(),
      ...contact,
    };
    setContacts([contactToAdd, ...contacts]);
  };

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contacts"
          element={
            <Contacts deleteContact={deleteContact} contacts={contacts} />
          }
        />
        <Route
          path="/addcontacts"
          element={<AddContacts addContact={addContact} />}
        />{" "}
        <Route path="/editcontacts/:id" element={<EditContacts />} />
        <Route
          path="/contacts/:id"
          element={
            <SingleContact
              contacts={contacts}
              deleteContact={deleteContact}
              updateContact={updateContact}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
