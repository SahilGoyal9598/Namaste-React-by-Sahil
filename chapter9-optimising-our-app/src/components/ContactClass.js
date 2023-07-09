import React from "react";

class ContactClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, email, phone_number, address } = this.props;
    return (
      <div className="user-card">
        <h1>hey</h1>
        <ul>
          <li>Name: {name}</li>
          <li>Email : {email}</li>
          <li>Phone Number: {phone_number}</li>
          <li>
            Address:
            <input type="text" />
          </li>
        </ul>
      </div>
    );
  }
}

export default ContactClass;
