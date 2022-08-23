import React, { useContext } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { usersContext } from "./contextapi/UserContext";

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContext(usersContext);
  const {
    id,
    firstName,
    lastName,
    email,
    profession,
    gender,
    phone,
    bio,
    url,
    dateOfBirth,
  } = contact;
  const navigate = useNavigate();

  const iconStyle = {
    fontSize: "25px",
    cursor: "pointer",
  };
  const fullName = firstName + " " + lastName;

  return (
    <div className="dark:bg-gray-900 flex flex-wrap items-center justify-center mt-4">
      <div className="w-96 h-auto bg-white rounded-lg dark:bg-gray-800 shadow-xl transform duration-200 easy-in-out m-2 p-12">
        <div className="text-center">
          <div className="h-40 w-36 rounded-lg mx-auto">
            <img alt={firstName} src={url} />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-bold text-green-800 dark:text-gray-300">
            {fullName}
          </h2>
          <p className="text-sm ">{profession}</p>
          <p className="text-sm">Gender : {gender}</p>
          <p className="text-sm">Phone : {phone}</p>
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
          <AiFillEye
            style={iconStyle}
            color="green"
            onClick={() => {
              navigate(`/contacts/${id}`);
            }}
          ></AiFillEye>

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

export default ContactCard;
