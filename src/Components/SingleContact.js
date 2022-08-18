import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { AiTwotoneDelete } from "react-icons/ai";
import { useParams } from "react-router-dom";

const SingleContact = () => {
  const { id } = useParams();

  return (
    <div className="dark:bg-gray-900 flex flex-wrap items-center justify-center mt-4">
      <div className="w-96 h-auto bg-white rounded-lg dark:bg-gray-800 shadow-xl transform duration-200 easy-in-out m-2 p-12">
        <div className="text-center">
          <div className="h-40 w-36 rounded-lg mx-auto">
            <img alt="" src="" />
          </div>
        </div>
        <h2>Hello single contact</h2>
        <div className="text-center">
          <h2 className="text-xl font-bold text-green-800 dark:text-gray-300">
            {/* {firstname + " " + lastname} */}
          </h2>
          {/* <p className="text-sm">{profession}</p>
          <p className="text-sm">Gender : {gender}</p>
          <div className="text-sm">{email}</div>
          <p className=" text-gray-600 dark:text-gray-300">{bio}</p>
        </div>
        <div className="flex mt-4 justify-evenly">
          <AiFillEye style={iconStyle} color="green"></AiFillEye>
          <FiEdit style={iconStyle}></FiEdit>
          <AiTwotoneDelete style={iconStyle} color="red"></AiTwotoneDelete> */}
        </div>
      </div>
    </div>
  );
};

export default SingleContact;
