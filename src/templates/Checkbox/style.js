import styled from "styled-components";

const Container = styled.div`
  .checkbox {
    margin-right: 10px;

    :hover {
      color: ${({ theme }) => theme.color.common.green};
    }

    i {
      font-size: 25px;
      display: flex;
      justify-content: center;
    }
  }
  .checkbox.checked {
    color: ${({ theme }) => theme.color.common.green};
  }
`;

export default Container;
