import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About class component</h1>
        <h2>this is namaste react web series</h2>
        <User />
        <UserClass />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>this is namaste react web series</h2>
//       <User name={"sahil"} />
//       <UserClass name={"Sahil class"} location={"Gurugram class"} />
//     </div>
//   );
// };

export default About;
