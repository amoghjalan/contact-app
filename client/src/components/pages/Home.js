import React from "react";
import { Link } from "react-router-dom";
import Contacts from "../contacts/Contacts";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <Link to="/addContact">
          <input
            type="button"
            value="Add Contact"
            className="btn btn-primary btn-block"
          />
        </Link>
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
