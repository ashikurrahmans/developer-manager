import React, { useState } from "react";
import ContactCard from "./ContactCard";
import { v4 as uuidv4 } from "uuid";

const Contacts = () => {
  const ourcontacts = [
    {
      id: "1",
      firstname: "Ashikur",
      lastname: "Rahman",
      email: "ashiqur.dream@gmail.com",
      dateOfBirth: "2/8/1998",
      profession: "Developer",
      url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
      gender: "male",
      bio: "Hello how are you?",
    },
    {
      id: "2",
      firstname: "Rahul",
      lastname: "Rahman",
      email: "rahul.dream@gmail.com",
      dateOfBirth: "2/8/1998",
      profession: "Software",
      url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
      gender: "male",
      bio: "Hello how are you?",
    },
    {
      id: "3",
      firstname: "Sofiqur",
      lastname: "Rahman",
      email: "sofiqur@gmail.com",
      dateOfBirth: "2/8/1998",
      profession: "Developer",
      url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
      gender: "male",
      bio: "Hello how are you?",
    },
    {
      id: "4",
      firstname: "Sadekur",
      lastname: "Rahman",
      email: "sadequr@gmail.com",
      dateOfBirth: "2/8/1998",
      profession: "Developer",
      url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
      gender: "male",
      bio: "Hello how are you?",
    },
    {
      id: "5",
      firstname: "Pabel",
      lastname: "Hasan",
      email: "pabelhasan@gmail.com",
      dateOfBirth: "2/8/1998",
      profession: "Developer",
      url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
      gender: "male",
      bio: "Hello how are you?",
    },
    {
      id: "6",
      firstname: "Shaon",
      lastname: "Rahman",
      email: "shaon@gmail.com",
      dateOfBirth: "2/8/1998",
      profession: "Developer",
      url: "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/774820f95c86aaee377a2c8c3fa5610d-1562010854461/040bb0c3-0030-4224-a49c-90d4a89f866f.jpg",
      gender: "male",
      bio: "Hello how are you?",
    },
  ];

  const [contacts, setContacts] = useState(ourcontacts);

  const deleteContact = (id) => {
    const deleteContact = contacts.filter((contact) => contact.id !== id);
    setContacts(deleteContact);
  };

  const viewSingleContact = (id) => {
    const singleContacts = contacts.find((contact) => contact.id === id);
    setContacts(singleContacts);
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
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {contacts.map((contact, i) => {
          return (
            <ContactCard
              contact={contact}
              key={i}
              deleteContact={deleteContact}
              viewSingleContact={viewSingleContact}
            ></ContactCard>
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
