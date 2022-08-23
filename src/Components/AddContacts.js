import React, { useContext } from "react";
import ContactForm from "./ContactForm";
import { usersContext } from "./contextapi/UserContext";

const AddContacts = () => {
  const { deleteContact } = useContext(usersContext);

  return (
    <>
      <ContactForm deleteContact={deleteContact}></ContactForm>
    </>
  );
};

export default AddContacts;
