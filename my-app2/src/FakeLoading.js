import React from "react";

const wait = ms => new Promise(r => setTimeout(r, ms));

class FakeLoading extends React.Component {
  state = {
    laoding: true
  };

  componentDidMount() {
    this.fakeUpload();
  }

  fakeUpload = () => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await wait(1000);

        this.setState({
          loading: false
        });
      }
    );
  };

  render() {
    if (this.state.loading) {
      return "Loading";
    }

    return (
      <div>
        <h4>Success</h4>

        <button onClick={this.fakeUpload}>Try again</button>
      </div>
    );
  }
}

export default FakeLoading;
