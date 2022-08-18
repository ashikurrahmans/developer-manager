import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";

const ContactCard = ({ contact }) => {
  const { firstname, lastname, email, profession, gender, bio, url } = contact;
  const iconStyle = {
    fontSize: "25px",
    cursor: "pointer",
  };
  return (
    <div>
      <div class="dark:bg-gray-900 flex flex-wrap items-center justify-center mt-4">
        <div class="w-96 h-auto bg-white rounded-lg dark:bg-gray-800 shadow-xl transform duration-200 easy-in-out m-2 p-12">
          <div class="text-center">
            <div class="h-40 w-36 rounded-lg mx-auto">
              <img alt={firstname} src={url} />
            </div>
          </div>

          <div className="text-center">
            <h2 class="text-xl font-bold text-green-800 dark:text-gray-300">
              {firstname + " " + lastname}
            </h2>
            <p class="text-sm">{profession}</p>
            <p class="text-sm">Gender : {gender}</p>
            <div className="text-sm">{email}</div>
            <p class=" text-gray-600 dark:text-gray-300">{bio}</p>
          </div>
          <div className="flex mt-4 justify-evenly">
            <AiFillEye style={iconStyle} color="green"></AiFillEye>
            <FiEdit style={iconStyle}></FiEdit>
            <AiTwotoneDelete style={iconStyle} color="red"></AiTwotoneDelete>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
