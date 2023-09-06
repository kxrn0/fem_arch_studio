import styled from "styled-components";

const SCPiece = styled.div`
  position: relative;

  .fs-h1 {
    color: rgb(var(--white), 0.5);
    position: absolute;
    top: 45px;
    right: -10px;

    @media screen and (max-width: 1200px) {
      top: 30px;
      right: 15px;
    }

    @media screen and (max-width: 650px) {
      display: none;
    }
  }

  .peace {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0.01%,
      rgba(0, 0, 0, 0.5) 100%
    );
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 40px;

    .fs-h4 {
      color: rgb(var(--white));
    }

    a,
    p {
      color: rgb(var(--white));
      text-decoration: none;
    }

    @media screen and (max-width: 1200px) {
      top: 0;
      height: 100%;
    }

    @media screen and (max-width: 650px) {
      padding: 25px;
    }
  }
`;

export default SCPiece;
