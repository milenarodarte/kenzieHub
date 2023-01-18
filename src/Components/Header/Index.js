import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100vw;
  height: 25vh;
  background-color: var(--grey-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  padding: ${(props) =>
    props.padding ? props.padding : "0rem 0rem 0rem 0rem"};
  @media (max-width: 500px) {
    height: 20vh;
    width: 100vw;
    flex-direction: column;
    padding: 1.8rem 1rem 1rem 1rem;
    justify-content: center;
    gap: 1.25rem;
  }
`;

export default HeaderStyled;
