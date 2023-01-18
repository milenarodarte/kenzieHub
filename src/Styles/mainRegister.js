import styled from "styled-components";

const MainStyledRegister = styled.main`
  width: 100vw;
  height: 91vh;
  background-color: var(--grey-4);
  border: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    width: 31.25rem;
    margin: 0 auto;
    gap: 0.5rem;
    background-color: var(--grey-3);
    border-radius: 0.5rem;
  }
  .divForm {
    display: flex;
    flex-direction: column;
    width: 31.25rem;
    margin: 0 auto;
    gap: 0.5rem;
    background-color: var(--grey-3);
    border-radius: 0.5rem;
    align-items: center;
  }

  p {
    margin: 0 auto;
    width: 20.625rem;
    color: var(--grey-0);
    font-size: var(--12px);
  }
  p.createCount {
    text-align: center;
  }
  h2 {
    color: var(--grey-0);
    margin-bottom: 1rem;
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
  }
  button:hover {
    background-color: var(--brand-1);
  }
  @media (max-width: 500px) {
    .divForm {
      width: 97vw;
    }
    form {
      width: 97vw;
    }
  }
`;

export default MainStyledRegister;
