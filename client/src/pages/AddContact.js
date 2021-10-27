import React from "react";
import { Redirect } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    redirectTo: ""
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addContact = () => {
    const { name, email, phone } = this.state;
    const newContact = {
      name,
      email,
      phone
    };
    this.props.addContact(newContact);
    this.setState({ redirectTo: "/" });
  };

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} push />;
    }

    return (
      <div>
        <h2>Add Contact</h2>
        <Stack
          component="form"
          sx={{
            width: "25ch"
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-name"
            type="text"
            label="Name"
            onChange={this.onChange}
            name="name"
            required
          />
          <TextField
            id="outlined-name"
            type="email"
            label="Email"
            onChange={this.onChange}
            name="email"
          />
          <TextField
            id="outlined-name"
            type="contact"
            label="Contact"
            name="phone"
            onChange={this.onChange}
          />
        </Stack>
        <Button onClick={this.addContact}>Add Contact</Button>

        <Button onClick={this.props.history.goBack}>Cancel</Button>
      </div>
    );
  }
}

export default AddContact;
