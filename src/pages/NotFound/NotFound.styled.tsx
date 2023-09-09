import styled from "styled-components";

const SCNotFound = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 100px;
  padding: 360px 165px;
  padding-top: 0;

  @media screen and (max-width: 1350px) {
    padding: 240px 100px;
    padding-top: 0;
  }

  @media screen and (max-width: 700px) {
    gap: 200px;
    padding: 0;
    padding-bottom: 170px;
  }
`;

export default SCNotFound;
