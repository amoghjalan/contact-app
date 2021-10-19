import React from "react";
import { Redirect } from "react-router-dom";

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

  render() {
    console.log(this.props.location);
    // const contact = this.props.location.state.contact;
    if (this.state.redirectTo) {
      return <Redirect to={this.state.redirectTo} push />;
    }

    return (
      <div>
        <h2>Edit Contact</h2>
        <input
          value={this.state.name}
          label="Name"
          onChange={this.onChange}
          name="name"
        />
        <input
          value={this.state.email}
          label="Email"
          onChange={this.onChange}
          name="email"
        />
        <input
          value={this.state.phone}
          label="Contact"
          name="phone"
          onChange={this.onChange}
        />
        <br />
        <button onClick={this.editContact}>Edit Contact</button>
        <br />
        <br />

        <button onClick={this.props.history.goBack}>Cancel</button>
      </div>
    );
  }
}

export default Edit;
