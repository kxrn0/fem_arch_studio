import styled from "styled-components";

const SCLocation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;

  .info {
    color: rgb(var(--dark-gray));
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  a {
    display: flex;
    gap: 25px;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        text-decoration: underline;
      }
    }

    p {
      color: rgb(var(--very-dark-blue));
      font-family: soyjak;
      font-size: 18px;
      line-height: 25px;
      font-weight: 700;
    }

    @media screen and (max-width: 1024px) {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 625px) {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    gap: 150px;
  }

  @media screen and (max-width: 625px) {
    flex-direction: column;
    gap: 45px;
    align-items: flex-start;
  }
`;

export default SCLocation;
