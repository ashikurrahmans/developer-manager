import React, { useContext } from "react";
import ContactCard from "./ContactCard";
import { usersContext } from "./contextapi/UserContext";

const Contacts = () => {
  const { contacts, deleteContact } = useContext(usersContext);
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {contacts?.map((contact, i) => {
          return (
            <ContactCard
              contact={contact}
              key={i}
              deleteContact={deleteContact}
            ></ContactCard>
          );
        })}
      </div>
    </>
  );
};

export default Contacts;
