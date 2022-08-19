import React from "react";
import { Container } from "./styles.js";

const Add = (props) => {
  const { onSave, inputText, setInputText } = props;

  return (
    <>
      <Container>
        <input
          placeholder="Nova Atividade..."
          maxLength={30}
          value={inputText}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              onSave();
            }
          }}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <button onClick={onSave}>
          <i class="material-icons">add</i>
        </button>
      </Container>
    </>
  );
};

export default Add;
