import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const SingleContact = ({ contacts, deleteContact }) => {
  const { id } = useParams();

  const singleContact = contacts.find((contact) => contact.id === id);

  const {
    firstName,
    lastName,
    profession,
    gender,
    dateOfBirth,
    email,
    bio,
    url,
  } = singleContact;

  const fullName = firstName + " " + lastName;

  const iconStyle = {
    fontSize: "25px",
    cursor: "pointer",
  };

  return (
    <div className="flex justify-start dark:bg-gray-900 mt-4 ml-14">
      <div className="  bg-white rounded-lg dark:bg-gray-800 shadow-2xl transform duration-200 easy-in-out m-2 p-12 ">
        <div className="text-center">
          <div className="h-40 w-36 rounded-lg mx-auto">
            <img alt={firstName} src={url} />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold text-green-800 dark:text-gray-300">
            {fullName}
          </h2>
          <p className="text-sm">{profession}</p>
          <p className="text-sm">Gender : {gender}</p>
          <p className="text-sm">
            birthday :
            {dateOfBirth instanceof Object
              ? format(dateOfBirth, "dd/MM/yyyy")
              : dateOfBirth}
          </p>
          <div className="text-sm">{email}</div>
          <p className=" text-gray-600 dark:text-gray-300">{bio}</p>
        </div>
        <div className="flex mt-4 justify-evenly">
          <FiEdit style={iconStyle}></FiEdit>
          <AiTwotoneDelete
            style={iconStyle}
            color="red"
            onClick={() => {
              deleteContact(id);
            }}
          ></AiTwotoneDelete>
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
