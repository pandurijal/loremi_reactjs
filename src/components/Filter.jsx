import React, { Component } from "react";

const Filter = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="number" name="paras" min="1" />
        <input type="checkbox" name="startWith" value="1" /> Start with Lorem
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Filter;
