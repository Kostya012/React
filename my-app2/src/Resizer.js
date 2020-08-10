import React from "react";

class Resizer extends React.Component {
  state = {
    width: 0
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResize);
  }

  onResize = e => {
    this.setState({ width: e.target.innerWidth });
  };

  render() {
    return this.props.children(this.state);
  }
}

export default Resizer;
