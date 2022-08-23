import React, { useContext, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import ContactForm from "./ContactForm";
import { usersContext } from "./contextapi/UserContext";

const SingleContact = () => {
  const { id } = useParams();

  const { contacts, deleteContact, updateContact } = useContext(usersContext);
  const singleContact = contacts.find((contact) => contact.id === id);

  const iconStyle = {
    fontSize: "25px",
    cursor: "pointer",
  };
  const [open, setOpen] = useState(true);

  return (
    <div className="flex dark:bg-gray-900 mt-4 ml-14 gap-2">
      <div className=" rounded-lg dark:bg-gray-800 shadow-2xl transform duration-200 easy-in-out m-2 p-12 ">
        <div className="text-center">
          <div className="h-40 w-36 rounded-lg mx-auto">
            <img alt={singleContact?.firstName} src={singleContact?.url} />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold text-green-800 dark:text-gray-300">
            {singleContact?.firstName + " " + singleContact?.lastName}
          </h2>
          <p className="text-sm">{singleContact?.profession}</p>
          <p className="text-sm">Gender : {singleContact?.gender}</p>
          <p className="text-sm">Phone : {singleContact?.phone}</p>
          <p className="text-sm">
            birthday :
            {singleContact?.dateOfBirth instanceof Object
              ? format(singleContact?.dateOfBirth, "dd/MM/yyyy")
              : singleContact?.dateOfBirth}
          </p>
          <div className="text-sm">{singleContact?.email}</div>
          <p className=" text-gray-600 dark:text-gray-300">
            {singleContact?.bio}
          </p>
        </div>
        <div className="flex mt-4 justify-evenly">
          <FiEdit style={iconStyle} onClick={() => setOpen(!open)}></FiEdit>
          <AiTwotoneDelete
            style={iconStyle}
            color="red"
            onClick={() => {
              deleteContact(id);
            }}
          ></AiTwotoneDelete>
        </div>
      </div>
      <div className="w-11/12">
        {!open && (
          <ContactForm
            singleContact={singleContact}
            updateContact={updateContact}
          ></ContactForm>
        )}
      </div>
    </div>
  );
};

export default SingleContact;
