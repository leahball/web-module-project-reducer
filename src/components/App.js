import React, { useReducer } from "react";
import reducer, { initialState } from "./../reducers";
import {
  applyNumber,
  clearDisplay,
  addMemory,
  applyMemory,
  changeOperation,
  clearMemory,
} from "../actions";

import "./App.css";

import TotalDisplay from "./TotalDisplay";
import CalcButton from "./CalcButton";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const handleAddOne = () => {
  //   dispatch(addOne(1));
  // };

  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number));
  };

  const handleClear = () => {
    dispatch(clearDisplay());
  };

  const handleAddMemory = () => {
    dispatch(addMemory());
  };

  const handleChangeOperator = (operation) => {
    dispatch(changeOperation(operation));
  };

  const handleApplyMemory = () => {
    dispatch(applyMemory());
  };

  const handleClearMemory = () => {
    dispatch(clearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {" "}
          Reducer Challenge
        </a>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton onClick={handleAddMemory} value={"M+"} />
              <CalcButton onClick={handleApplyMemory} value={"MR"} />
              <CalcButton onClick={handleClearMemory} value={"MC"} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(1)} value={1} />
              <CalcButton onClick={() => handleApplyNumber(2)} value={2} />
              <CalcButton onClick={() => handleApplyNumber(3)} value={3} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(4)} value={4} />
              <CalcButton onClick={() => handleApplyNumber(5)} value={5} />
              <CalcButton onClick={() => handleApplyNumber(6)} value={6} />
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(7)} value={7} />
              <CalcButton onClick={() => handleApplyNumber(8)} value={8} />
              <CalcButton onClick={() => handleApplyNumber(9)} value={9} />
            </div>

            <div className="row">
              <CalcButton
                onClick={() => handleChangeOperator("+")}
                value={"+"}
              />
              <CalcButton
                onClick={() => handleChangeOperator("*")}
                value={"*"}
              />
              <CalcButton
                onClick={() => handleChangeOperator("-")}
                value={"-"}
              />
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
