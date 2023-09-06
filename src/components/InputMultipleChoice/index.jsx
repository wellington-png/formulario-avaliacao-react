import InputMultipleChoiceContainer  from "./styles";

export default function InputMultipleChoice({ pergunta, opcoes, name }) {
    return (
        <InputMultipleChoiceContainer>
            <h3>{pergunta}</h3>
            <ul>
                {opcoes.map((opcao, index) => (
                    <li key={index}>
                        <input type="radio" name={name} id={opcao} value={opcao} />
                        <label htmlFor={opcao}>{opcao}</label>
                    </li>
                ))}
            </ul>
        </InputMultipleChoiceContainer>
    );
}

