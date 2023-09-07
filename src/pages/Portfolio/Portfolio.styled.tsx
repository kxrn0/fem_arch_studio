import styled from "styled-components";

const SCPortfolio = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-bottom: 160px;

  @media screen and (max-width: 1200px) {
    gap: 25px;
    padding-bottom: 200px;
  }

  @media screen and (max-width: 760px) {
    padding-bottom: 130px;
  }
`;

export default SCPortfolio;
