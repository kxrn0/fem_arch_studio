import styled from "styled-components";

const SCPortfolio = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 360px 165px;
  padding-top: 0;

  @media screen and (max-width: 1200px) {
    gap: 25px;
    padding: 240px 100px;
    padding-top: 0;
  }

  @media screen and (max-width: 760px) {
    padding: 0;
    padding-bottom: 170px;
  }
`;

export default SCPortfolio;
