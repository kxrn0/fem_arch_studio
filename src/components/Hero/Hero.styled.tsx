import styled from "styled-components";

const SCHero = styled.div`
  position: relative;
  width: fit-content;

  img {
    @media screen and (max-width: 700px) {
      width: 100vw;
    }
  }

  .screen {
    background-color: rgb(var(--very-dark-blue), 0.4);
    position: absolute;
    inset: 0;
  }

  .rest {
    /* outline: 1px solid red; */
    background-color: rgb(var(--white));
    position: absolute;
    top: 215px;
    left: 485px;
    bottom: 0;
    padding-top: 220px;
    padding-left: 185px;

    .fs-h1 {
      color: rgb(var(--very-light-gray));
      position: absolute;
      bottom: 390px;
      right: 0;

      @media screen and (max-width: 1300px) {
        bottom: 325px;
        right: 125px;
      }

      @media screen and (max-width: 700px) {
        display: none;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 50px;
      width: 445px;

      .fs-h3 {
        color: rgb(var(--very-dark-blue));
        position: relative;

        &::before {
          content: "";
          background-color: rgb(var(--light-gray));
          position: absolute;
          top: -60px;
          width: 65px;
          height: 1px;

          @media screen and (max-width: 1300px) {
            top: -75px;
          }

          @media screen and (max-width: 700px) {
            display: none;
          }
        }

        @media screen and (max-width: 700px) {
          font-size: 48px;
          line-height: 52px;
          letter-spacing: -1.7px;
        }
      }

      .fs-body-1 {
        color: rgb(var(--dark-gray));
      }

      @media screen and (max-width: 1300px) {
        gap: 40px;
      }

      @media screen and (max-width: 700px) {
        gap: 20px;
        width: 310px;
      }
    }

    @media screen and (max-width: 1300px) {
      top: 290px;
      left: 60px;
      padding-top: 160px;
      padding-left: 60px;
      width: 100%;
    }

    @media screen and (max-width: 700px) {
      top: 195px;
      left: 0;
      padding-top: 65px;
      padding-left: 30px;
      width: fit-content;
    }
  }
`;

export default SCHero;
