import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SahilGoyal9598");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
    console.log(this.state.userInfo);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    console.log(this.state.userInfo);
  }
  componentWillUnmount() {
    console.log(this.state.userInfo);
    console.log("unMount");

    // clean up should we do
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @sahilgoyal9598</h4>
      </div>
    );
  }
}

export default UserClass;
