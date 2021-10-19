import React from "react";
import { Redirect } from "react-router-dom";

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
        <input label="Name" onChange={this.onChange} name="name" />
        <input label="Email" onChange={this.onChange} name="email" />
        <input label="Contact" name="phone" onChange={this.onChange} />
        <button onClick={this.addContact}>Add Contact</button>

        <button onClick={this.props.history.goBack}>Cancel</button>
      </div>
    );
  }
}

export default AddContact;
