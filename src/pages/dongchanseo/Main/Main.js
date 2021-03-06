import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Nav from "./Nav/Nav";
import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import CreateMD from "./CreateMD";

import "./Main.scss";
import FileUpLoad from "./FileUpLoad";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mdValid: false,
    };
    // if (!sessionStorage.getItem("tokken")) {
    //   alert("로그인부터 하시오.");
    //   this.props.history.push("/login-dongchanseo");
    // }
  }

  activeMD = () => {
    //console.log(this.state.mdValid);
    this.setState({
      mdValid: !this.state.mdValid,
    });
  };

  render() {
    const { mdValid } = this.state;
    return (
      <>
        <Nav />
        <div className="Main_DC">
          <div className="div-center">
            {/* <MainLeft activeMD={this.activeMD} mdValid={mdValid} />
            <MainRight />
            <CreateMD activeMD={this.activeMD} mdValid={mdValid} />*/}
            <FileUpLoad />
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Main);
