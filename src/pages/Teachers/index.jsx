import RatingForm from "../../components/RatingForm"
import { useParams } from 'react-router-dom';
import menus from "../../datas/menu";

export default function Teachers() {
    const { id } = useParams();
    const professores = menus.professores;
    return (
        <div>
            <h1>Avaliação do professor {professores[id - 1].label} </h1>
            <RatingForm fields={[
                { label: "Qualidade do Material Didático", name: "quality_material", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: "Clareza na Explicação de Conceitos", name: "clarity_explanation", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: "Disponibilidade para Esclarecer Dúvidas", name: "availability_doubts", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: "Capacidade de Engajar os Alunos", name: "engagement_capability", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: "Relevância do Conteúdo para a Disciplina", name: "content_relevance", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: "Avaliação Justa e Transparente", name: "fair_assessment", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: "Utilização de Recursos Tecnológicos", name: "tech_resources_utilization", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: "Comunicação e Feedback Eficazes", name: "effective_communication_feedback", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: "Motivação para Aprender Informática", name: "motivation_to_learn", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: "Contribuição para o Crescimento Profissional", name: "professional_growth_contribution", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] }
            ]} />
        </div>
    )
}