import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-slate-100  shadow-lg">
      <div className="w-10/12 mx-auto ">
        <div className="border-b md:flex md:items-center md:justify-between p-4 pb-0 md:pb-4">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <h1 className="leading-none text-2xl text-grey-darkest">
              <Link
                className="no-underline text-grey-darkest hover:text-black text-semibold"
                to="/"
              >
                Developers
              </Link>
            </h1>
          </div>

          <form className="mb-4 w-full md:mb-0 md:w-1/4">
            <label className="hidden" htmlFor="search-form">
              Search
            </label>
            <input
              className="bg-grey-lightest border-2 focus:border-orange p-2 rounded-lg shadow-inner w-full"
              placeholder="Search"
              type="text"
            />
          </form>

          <nav>
            <ul className="list-reset md:flex md:items-center">
              <li className="md:ml-4">
                <Link
                  className="text-xl font-semibold block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="md:ml-4">
                <Link
                  className="text-xl font-semibold border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="md:ml-4">
                <Link
                  className="text-xl font-semibold border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                  to="/contacts"
                >
                  Contacts
                </Link>
              </li>
              <li className="md:ml-4">
                <Link
                  className="text-xl font-semibold border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                  to="/addcontacts"
                >
                  AddContact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
