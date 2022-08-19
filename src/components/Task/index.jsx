import React, { useState } from "react";
import Checkbox from "../../templates/Checkbox/index.jsx";
import Container from "./style.js";

const Task = (props) => {
  const { title, onRemove, setTasks, index, isChecked, isFixed } = props;
  const [checked, setChecked] = useState(isChecked);
  const [fixed, setFixed] = useState(isFixed);

  const checkedToggle = () => {
    setTasks((init) => {
      init[index] = { ...init[index], checked: !isChecked };
      return [...init];
    });
    setChecked(!checked);
  };

  const checkedClass = checked ? "checked" : "";
  const checkedContainerClass = `checkbox ${checkedClass}`.trim();

  const fixedToggle = () => {
    setTasks((init) => {
      init[index] = { ...init[index], fixed: !isFixed };
      return [...init];
    });
    setFixed(!fixed);
  };

  const fixedClass = fixed ? "fixed" : "";
  const fixedContainerClass = `fixar ${fixedClass}`.trim();

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <Container>
        <Checkbox
          containerClass={checkedContainerClass}
          toggle={checkedToggle}
        />
        <div className="resto">
          <span className={checkedContainerClass}>{title}</span>
          <div className="but">
            <button
              disabled
              className={fixedContainerClass}
              onClick={fixedToggle}
            >
              <i class="material-icons">schedule</i>
            </button>
            <button className="excluir" onClick={onRemove}>
              <i class="material-icons">delete</i>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Task;
