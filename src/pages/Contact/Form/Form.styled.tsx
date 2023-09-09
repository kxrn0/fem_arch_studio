import styled from "styled-components";

const SCForm = styled.form`
  display: flex;
  flex-direction: column;

  .fields {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  button {
    align-self: flex-end;

    svg {
      g {
        stroke: rgb(var(--white));
      }
    }
  }
`;

export default SCForm;
