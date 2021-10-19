import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddContact from "./pages/AddContact";
import View from "./pages/View";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

export default class App extends React.Component {
  state = {
    contacts: [],
    idToAssign: 1
  };

  componentDidMount() {
    const storeItem = localStorage.getItem("contactList");

    if (storeItem) {
      const contacts = JSON.parse(storeItem);
      this.setState({ contacts });
    }
  }

  addContact = newContact => {
    let newContacts = this.state.contacts;
    newContact.id = this.state.idToAssign;
    newContacts.push(newContact);
    console.log(newContacts);
    this.setState({
      contacts: newContacts,
      idToAssign: this.state.idToAssign + 1
    });
    this.updateContacts(newContacts);
  };

  editContact = newContact => {
    const id = newContact.id;
    const newContacts = this.state.contacts.map(item => {
      if (item.id === id) {
        return newContact;
      }
      return item;
    });
    this.setState({
      contacts: newContacts
    });
    this.updateContacts(newContacts);
  };

  updateContacts = newContacts => {
    const storeItem = JSON.stringify(newContacts);
    localStorage.setItem("contactList", storeItem);
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              render={routeProps => (
                <Home contacts={this.state.contacts} {...routeProps} />
              )}
              exact
            />
            <Route
              path="/add"
              render={routeProps => (
                <AddContact addContact={this.addContact} {...routeProps} />
              )}
            />
            <Route
              path="/edit"
              render={routeProps => (
                <Edit editContact={this.editContact} {...routeProps} />
              )}
            />
            <Route
              path="/view"
              render={routeProps => <View {...routeProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
