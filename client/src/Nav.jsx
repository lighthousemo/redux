import React, {Component} from 'react';

class Nav extends Component {
  render() {
    console.log("Render Nav");
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center">Contact List App (v5)</a>
        </div>
      </nav>
    );
  }
}
export default Nav;
