import styled from "styled-components";

const SCAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 360px 165px;
  padding-top: 0;

  .heritage {
    display: flex;
    gap: 125px;
    margin-top: 200px;
    width: fit-content;

    .history {
      display: flex;
      flex-direction: column;
      gap: 55px;
      width: 445px;

      .fs-h3 {
        display: flex;
        flex-direction: column;
        gap: 85px;

        &::before {
          content: "";
          background-color: rgb(var(--light-gray));
          width: 65px;
          height: 1px;
        }

        @media screen and (max-width: 1200px) {
          gap: 50px;
        }

        @media screen and (max-width: 625px) {
          gap: 70px;
        }
      }

      .paragraphs {
        display: flex;
        flex-direction: column;
        gap: 30px;
      }

      @media screen and (max-width: 1200px) {
        width: 100%;
      }

      @media screen and (max-width: 700px) {
        padding: 0 35px;
      }
    }

    img {
      @media screen and (max-width: 1200px) {
        display: none;
      }
    }

    @media screen and (max-width: 700px) {
      margin-top: 365px;
    }
  }

  .leaders {
    display: flex;
    gap: 200px;
    margin-top: 210px;

    .profiles {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 65px;
      column-gap: 30px;

      @media screen and (max-width: 1200px) {
        row-gap: 100px;
        column-gap: 10px;
      }

      @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        gap: 80px;
      }
    }

    @media screen and (max-width: 1200px) {
      flex-direction: column;
      gap: 50px;
      margin-top: 230px;
    }
  }

  @media screen and (max-width: 1350px) {
    padding: 240px 100px;
    padding-top: 0;
  }

  @media screen and (max-width: 700px) {
    padding: 0;
    padding-bottom: 170px;
  }
`;

export default SCAbout;
