import styled from "styled-components";

const SCImageSlider = styled.div`
  position: relative;
  width: fit-content;
  background-color: yellow;
  padding: 10px;

  .information {
    position: absolute;
    inset: 0;
    background-color: rgb(var(--very-dark-blue), 0.3);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    padding: 185px 0 180px 190px;

    .details {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .fs-h2 {
        color: rgb(var(--white));
        width: 545px;
      }

      .fs-body-1 {
        color: rgb(var(--white));
        width: 445px;
      }
    }

    @media screen and (max-width: 1200px) {
      padding: 185px 60px;
      padding-bottom: 180px;
    }
  }

  .buttons {
    display: flex;
    position: absolute;
    bottom: 0;
    left: -80px;

    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
`;

export default SCImageSlider;
