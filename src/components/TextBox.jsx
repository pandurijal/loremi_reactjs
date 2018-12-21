import React, { Component } from "react";

const TextBox = ({ content }) => {
  //console.log(content);
  return (
    <div>
      {/* {content} */}
      {content.map(c => (
        <p key={Math.random()}>{c}</p>
      ))}
    </div>
  );
};

export default TextBox;
