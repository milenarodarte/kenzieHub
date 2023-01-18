import styled from "styled-components";

const DivModalStyled = styled.div`
  background-color: rgba(18, 18, 20, 0.5);
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0rem;
  display: flex;
  align-items: center;

  .modalContainer {
    width: 23.063rem;
    margin: 0 auto;
    height: 21.375rem;
    border-radius: 0.5rem;
  }
  @media (max-width: 500px) {
    .modalContainer {
      width: 96vw;
      max-width: 23.63rem;
    }
  }
  .headerModal {
    background-color: var(--grey-2);
    height: 3.15rem;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem;
    align-items: center;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
  }
  .closeModal {
    background-color: transparent;
    border: none;
    color: var(--grey-0);
    font-size: var(--16px);
    font-weight: 600;
    cursor: pointer;
  }
  .p-tech {
    color: var(--grey-0);
    font-size: var(--14px);
    font-weight: 700;
  }
  .mainModal {
    background-color: var(--grey-3);
    height: 18.25rem;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 23.063rem;
    padding: 1.325rem;
  }
  label {
    color: var(--grey-0);
  }
  input {
    margin-bottom: 1rem;
    height: 2.5rem;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--grey-2);
    font-size: 1rem;
    padding: 0.5rem;
    border: 2px solid var(--grey-1);
    color: var(--grey-1);
  }
  select {
    margin-bottom: 2rem;
    height: 2.5rem;
    margin-top: 0.5rem;
    border-radius: 0.5rem;
    background-color: var(--grey-2);
    font-size: 1rem;
    padding: 0.5rem;
    border: 2px solid var(--grey-1);
    color: var(--grey-1);
  }
  @media (max-width: 500px) {
    form {
      width: 95%;
    }
  }
  .buttonSubmit {
    width: 100%;
    height: 3rem;
    font-size: var(--18px);
  }
`;
export default DivModalStyled;
