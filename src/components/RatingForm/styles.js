import { styled } from "styled-components";


const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;

  button.btn-save {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    background-color: #4caf50;
    color: #fff;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default Form;
