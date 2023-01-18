import styled from "styled-components";

const MainStyled = styled.main`
  width: 100vw;
  height: 75vh;
  background-color: var(--grey-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  form {
    display: flex;
    flex-direction: column;
    width: 31.25rem;
    margin: 0 auto;
    gap: 0.7rem;
  }

  p {
    margin: 0 auto;
    width: 20.625rem;
    color: var(--grey-0);
    font-size: var(--12px);
  }
  input {
    width: 20.625rem;
    height: 3rem;
    background-color: var(--grey-2);
    border-radius: 0.25rem;
    border: none;
    color: #868e96;
    padding: 0rem 1rem 0rem 1rem;
    margin: 0 auto;
  }
  input:hover {
    border: 2px solid var(--grey-1);
  }
  select {
    margin: 0 auto;
    width: 20.625rem;
    height: 3rem;
    background-color: var(--grey-2);
    border-radius: 0.25rem;
    border: none;
    color: #868e96;
    padding: 0rem 1rem 0rem 1rem;
  }
  select:hover {
    border: 2px solid var(--grey-1);
  }
  button {
    background-color: var(--brand-error);
    width: 20.625rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  button:hover {
    background-color: var(--brand-1);
  }
  .noCount {
    font-size: var(--12px);
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    width: 100vw;
    height: 100vh;
    background-color: var(--grey-4);
    form {
      width: 100vw;
    }
  }
`;

export default MainStyled;
