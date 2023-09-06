import { styled } from "styled-components";

const InputMultipleChoiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    ul li {
        display: flex;
        align-items: center;
        gap: 0.625rem;
    }

    ul li input {
        width: 1.25rem;
        height: 1.25rem;
    }
`;

export default InputMultipleChoiceContainer;