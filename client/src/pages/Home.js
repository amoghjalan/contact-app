import React from "react";
import { Link, Redirect } from "react-router-dom";
import ContactList from "../components/ContactList";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
// import "./Styles.css";

class Home extends React.Component {
  state = {
    redirectTo: "",
    contactToBeViewed: {},
    search: ""
  };

  contactClicked = contact => {
    this.setState({
      redirectTo: "/view",
      contactToBeViewed: contact
    });
  };

  render() {
    if (this.state.redirectTo) {
      return (
        <Redirect
          to={{
            pathname: this.state.redirectTo,
            state: {
              contact: this.state.contactToBeViewed
            }
          }}
          push
        />
      );
    }

    console.log(this.props);

    let contactsToShow = [];

    if (this.state.search) {
      contactsToShow = this.props.contacts.filter(contact => {
        if (
          contact.name.includes(this.state.search) ||
          contact.email.includes(this.state.search) ||
          contact.phone.includes(this.state.search)
        ) {
          return true;
        }
        return false;
      });
    } else {
      contactsToShow = this.props.contacts;
    }

    return (
      <>
        <Paper component="form">
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>

          <InputBase
            placeholder="  Search Contacts  "
            value={this.state.search}
            onChange={e => this.setState({ search: e.target.value })}
          />
        </Paper>

        {contactsToShow.map(contact => (
          <div onClick={() => this.contactClicked(contact)}>
            <ContactList key={contact.id} name={contact.name} />
          </div>
        ))}

        <Link to="/add">
          <Fab variant="extended">
            <AddIcon />
            Add
          </Fab>
        </Link>
      </>
    );
  }
}

export default Home;
