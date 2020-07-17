import React, { Component } from "react";
import {} from "u";
import "./FileUpload.scss";

class FileUpLoad extends Component {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();

    this.state = {
      file: "",
      previewURL: "",
    };
  }

  handleUploadFile = (e) => {
    e.preventDefault();
    console.log(this.fileInput.current.files[0].name);
  };

  handleReadFile = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = this.fileInput.current.files[0];
    reader.onload = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file); //파일 업로드 작업이 끝났을 때 실행
  };
  render() {
    const result =
      this.state.file !== "" ? (
        <img className="loadImage" src={this.state.previewURL}></img>
      ) : (
        <></>
      );
    return (
      <form className="FileUpLoad" onSubmit={this.handleUploadFile}>
        UpLoad file :{" "}
        <input
          type="file"
          ref={this.fileInput}
          onChange={this.handleReadFile}
        />
        <br />
        {result}
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default FileUpLoad;
