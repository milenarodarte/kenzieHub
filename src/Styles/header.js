import styled from "styled-components";

const HeaderRegister = styled.header`
  width: 100vw;
  height: 9vh;
  background-color: var(--grey-4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  border-bottom: none;

  padding: ${(props) =>
    props.padding ? props.padding : "0rem 0rem 0rem 0rem"};

  .headerDiv {
    width: 20.625rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  button {
    height: 2.5rem;
    width: 4.219rem;
    background-color: var(--grey-3);
    color: var(--grey-0);
  }
  button:hover {
    background-color: var(--grey-2);
  }
  .buttonBack {
    font-size: var(--12px);
  }
  @media (max-width: 500px) {
    height: 20vh;
    flex-direction: column;
    padding: 1.8rem 1rem 1rem 1rem;
    justify-content: center;
    gap: 1.25rem;
  }
`;
export default HeaderRegister;
