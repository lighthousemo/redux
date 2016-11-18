import React, {Component} from 'react';
import ContactItem from './ContactItem.jsx';

class ContactList extends Component {
  handleFilterChange(e) {
    this.props.onFilterChange(e.target.value);
  }

  render() {
    console.log("Render ContactList");
    return (
      <div className="col s4 main">
        <div className="row filter">
          <div className="col s12">
            <input placeholder="Filter by name" type="text" onKeyUp={this.handleFilterChange.bind(this)}/>
          </div>
        </div>
        <ul className="collection contact-list">
          { this.props.contacts.map(function(contact) {
            return <ContactItem key={contact.id} contact={contact} />
          })}
        </ul>
      </div>
    );
  }
}
export default ContactList;
