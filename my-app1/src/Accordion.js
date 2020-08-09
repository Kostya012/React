import React from "react";

const Button = props => {
  return <button onClick={props.onClick}>{props.content}</button>;
};

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.expanded
    };
  }

  onToggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const btnText = this.state.isOpen ? "HIDE" : "SHOW";

    return (
      <div>
        <Button onClick={this.onToggle} content={btnText} />
        {this.state.isOpen ? this.props.children : null}
      </div>
    );
  }
}

Accordion.defaultProps = {
  expanded: false
};

export default Accordion;