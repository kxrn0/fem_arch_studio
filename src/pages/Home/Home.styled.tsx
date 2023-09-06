import styled from "styled-components";

const SCHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 165px;
  padding-bottom: 200px;

  .hero {
    position: relative;
    margin-top: 195px;

    .fs-h1 {
      color: rgb(var(--very-light-gray));
      position: absolute;
      bottom: 455px;
      right: 170px;

      @media screen and (max-width: 1000px) {
        position: relative;
        bottom: -40px;
        right: 0;
      }

      @media screen and (max-width: 675px) {
        display: none;
      }
    }

    .welcome {
      display: flex;
      justify-content: flex-end;
      gap: 125px;

      &::before {
        content: "";
        background-color: rgb(var(--light-gray));
        width: 65px;
        height: 1px;
        display: none;

        @media screen and (max-width: 625px) {
          display: block;
        }
      }

      .message {
        display: flex;
        flex-direction: column;
        gap: 45px;
        padding-top: 75px;

        .fs-h3 {
          color: rgb(var(--very-dark-blue));
          width: 445px;

          @media screen and (max-width: 625px) {
            width: 100%;
          }
        }

        .paragraphs {
          color: rgb(var(--dark-gray));
          width: 445px;
          display: flex;
          flex-direction: column;
          gap: 30px;

          @media screen and (max-width: 1000px) {
            width: 575px;
          }

          @media screen and (max-width: 625px) {
            width: 100%;
          }
        }

        @media screen and (max-width: 1000px) {
          padding: 0;
        }

        @media screen and (max-width: 625px) {
          gap: 25px;
        }
      }

      img {
        @media screen and (max-width: 1000px) {
          display: none;
        }
      }

      @media screen and (max-width: 625px) {
        flex-direction: column;
        gap: 70px;
        padding: 70px 30px;
        padding-bottom: 115px;
      }
    }

    @media screen and (max-width: 1000px) {
      margin-top: 50px;
    }

    @media screen and (max-width: 625px) {
      margin: 0;
    }
  }

  .small-section {
    position: relative;
    margin-top: 200px;

    .team-container {
      background-color: rgb(var(--very-dark-blue), 0.5);
      position: absolute;
      inset: 0;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 30px;
      padding: 170px 190px;

      .fs-h3 {
        color: rgb(var(--white));
        width: 445px;

        @media screen and (max-width: 600px) {
          width: 100%;
        }
      }

      @media screen and (max-width: 1200px) {
        padding: 170px 60px;
      }

      @media screen and (max-width: 600px) {
        padding: 180px 30px;
      }
    }

    picture {
      img {
        @media screen and (max-width: 500px) {
          width: 100vw;
        }
      }
    }

    @media screen and (max-width: 1000px) {
      margin-top: 235px;
    }

    @media screen and (max-width: 625px) {
      margin-top: 0;
    }
  }

  .featured {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    align-items: center;
    row-gap: 65px;
    margin-top: 200px;

    .fs-h3 {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      @media screen and (max-width: 650px) {
        grid-row: 1 / 2;
        grid-column: 1;
      }
    }

    .button-primary {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
      justify-self: end;

      @media screen and (max-width: 650px) {
        grid-row: 3 / 4;
        grid-column: 1;
        justify-self: auto;
        margin-top: 25px;
      }
    }

    .featured-projects {
      display: flex;
      gap: 30px;
      grid-row: 2 / 3;
      grid-column: 1 / 3;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
        gap: 25px;
      }

      @media screen and (max-width: 650px) {
        margin-top: 45px;
        grid-row: 2 / 3;
        grid-column: 1;
      }
    }

    @media screen and (max-width: 1200px) {
      row-gap: 85px;
    }

    @media screen and (max-width: 650px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto auto;
      row-gap: 0;
    }

    @media screen and (max-width: 650px) {
      margin-top: 75px;
    }
  }

  @media screen and (max-width: 720px) {
    padding: 0;
    padding-bottom: 150px;
  }
`;

export default SCHome;
