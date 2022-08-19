import React from "react";
import "./styles.js";
import { Container } from "./styles.js";

const Header = ({ periods, currentIndex, setCurrentIndex }) => {
  const previousIndex = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((init) => init - 1);
    } else {
      setCurrentIndex(periods.length - 1);
    }
  };

  const nextIndex = () => {
    if (currentIndex !== periods.length - 1) {
      setCurrentIndex((init) => init + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />

      <Container>
        <button onClick={previousIndex}>
          <i class="material-icons">arrow_back_ios</i>
        </button>
        <h1>{periods[currentIndex]}</h1>
        <button onClick={nextIndex}>
          <i class="material-icons">arrow_forward_ios</i>
        </button>
      </Container>
    </>
  );
};

export default Header;
