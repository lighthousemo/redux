import React, {Component} from 'react';
import Nav from './Nav.jsx';
import ContactList from './ContactList.jsx';
import $ from 'jquery';

// in ruby: class App < Component
class App extends Component {
  // automatically called when the component is loaded into
  // the DOM.
  componentDidMount() {
    console.log("componentDidMount App");
    $.get("http://localhost:8000/api/contacts")
    .done(function(data) {
      console.log("Got data from API: ", data);
      // set the contact list as a state property of App
      // automatically re-renders App
      this.setState({contacts: data, filteredContacts: data})
    }.bind(this)); // bind this makes 'this' inside the callback be the same as 'this' in componentDidMount, allowing us to call setState
  }

  filterChanged(newFilter) {
    // filter contact list
    var newContacts = this.state.contacts.filter(function(contact) {
      return contact.name.toLowerCase().indexOf(newFilter.toLowerCase()) >= 0

    });
    this.setState({filteredContacts: newContacts});
  }

  // in ruby this is an instance method. ex: def render
  render() {
    console.log("Render App");
    return (
      <div>
        <Nav />
        <div className="container">
          { this.state &&
          <ContactList contacts={this.state.filteredContacts} onFilterChange={this.filterChanged.bind(this)}/>
          }
        </div>
      </div>
    );
  }
}
// allows us to import App from './App.jsx'
export default App;
