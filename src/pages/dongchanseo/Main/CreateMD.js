import React, { Component } from "react";
import "./CreateMD.scss";

class CreateMD extends Component {
  render() {
    const { mdValid, activeMD } = this.props;
    const component = (
      <div className="CreateMD">
        <div className="main">
          <div></div>
          <div>
            
          </div>
        </div>
      </div>
    );

    return mdValid ? component : <div></div>;
  }
}

export default CreateMD;
