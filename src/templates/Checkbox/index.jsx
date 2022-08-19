import React from "react";
import Container from "./style.js";

const Checkbox = ({ containerClass, toggle }) => {
  return (
    <Container>
      <button className={containerClass} onClick={toggle}>
        <i class="material-icons">done</i>
      </button>
    </Container>
  );
};
export default Checkbox;
