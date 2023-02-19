import React from "react";
const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
    }

    handleClick = () => {
      console.log("this button has been clicked!");
    };

    render() {
      return <WrappedComponent onClick={this.handleClick} {...this.props} />;
    }
  }

  return WithCounter;
};

export default withCounter;
