import styled from "styled-components";

const SCLeaf = styled.div`
  width: 1280px;
  height: 630px;

  @media screen and (max-width: 1300px) {
    width: 570px;
    height: 560px;
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
    height: 100vw;
  }
`;

export default SCLeaf;
