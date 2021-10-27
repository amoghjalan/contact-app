import React from "react";
import { Redirect } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.location.state.contact.name,
      email: props.location.state.contact.email,
      phone: props.location.state.contact.phone,
      redirectTo: ""
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  editContact = () => {
    const { name, email, phone } = this.state;
    const newContact = {
      name,
      email,
      phone,
      id: this.props.location.state.contact.id
    };
    this.props.editContact(newContact);
    this.setState({ redirectTo: "/" });
  };

  deleteContact = () => {};

  render() {
    console.log(this.props.location);
    // const contact = this.props.location.state.contact;
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} push />;
    }

    return (
      <div>
        <h2>Edit Contact</h2>
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
            value={this.state.name}
            label="Name"
            onChange={this.onChange}
            name="name"
            type="name"
            required
          />
          <TextField
            id="outlined-name"
            value={this.state.email}
            label="Email"
            onChange={this.onChange}
            name="email"
            type="email"
          />
          <TextField
            id="outlined-name"
            value={this.state.phone}
            label="Contact"
            name="phone"
            onChange={this.onChange}
            type="contact"
          />
        </Stack>
        <Button onClick={this.editContact}>Save Changes</Button>
        <Button onClick={this.props.history.goBack}>Cancel</Button>
      </div>
    );
  }
}

export default Edit;
