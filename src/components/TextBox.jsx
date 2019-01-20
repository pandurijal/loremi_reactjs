import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class TextBox extends Component {
  copied = () => toast("Copied!");

  render() {
    return (
      <div>
        <div className="text-box">
          <CopyToClipboard text={this.props.content}>
            <button className="copy-to" onClick={this.copied}>
              Copy to clipboard
            </button>
          </CopyToClipboard>
          {this.props.content.map(c => (
            <p key={Math.random()}>{c}</p>
          ))}
        </div>
        <ToastContainer
          toastClassName="copied"
          position="bottom-center"
          autoClose={1000}
          hideProgressBar
        />
      </div>
    );
  }
}

export default TextBox;
