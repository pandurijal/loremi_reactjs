import React from "react";

const Filter = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <p className="sub-title">Number of Paraghraps</p>
        <div className="paras">
          <button onClick={props.onDec} className="min">
            -
          </button>
          <input
            type="number"
            name="paras"
            min="1"
            placeholder="1"
            value={props.state.paras}
            onChange={props.changeParas}
          />
          <button onClick={props.onInc} className="plus">
            +
          </button>
        </div>
        <p className="sub-title">Start with lorem ipsum?</p>
        <div className="lorem">
          <label className="switch">
            <input
              type="checkbox"
              name="lorem"
              value={props.state.lorem}
              onChange={props.changeLorem}
              defaultChecked="true"
            />
            <div className="slider" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Filter;
