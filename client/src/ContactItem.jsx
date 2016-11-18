import React, {Component} from 'react';

class ContactItem extends Component {
  render() {
    console.log("Render ContactItem");
    return (
      <li className="collection-item avatar">
        <img src={this.props.contact.image_url} alt="" className="circle" />
        <span className="title">{this.props.contact.name}</span>
        <p>{this.props.contact.email}</p>
      </li>
    );
  }
}
export default ContactItem;
