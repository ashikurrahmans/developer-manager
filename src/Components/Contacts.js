import React from "react";
import ContactCard from "./ContactCard";

const Contacts = () => {
  const ourcontacts = [
    {
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
  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
        {ourcontacts.map((contact, i) => {
          return <ContactCard contact={contact} key={i}></ContactCard>;
        })}
      </div>
    </>
  );
};

export default Contacts;
