import RatingForm from "../../components/RatingForm"
import { useParams } from 'react-router-dom';
import menus from "../../datas/menu";


export default function Subjects() {
    const { id } = useParams();
    const disciplinas = menus.disciplinas;
    return (
        <div>
            <h1>Avaliação da disciplina {disciplinas[id - 1].label} </h1>

            <RatingForm fields={[
                { label: `Avalie a qualidade dos materiais didáticos fornecidos na disciplina de ${disciplinas[id - 1].label}.`, name: "material_quality", type: "text", options:["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Como você avalia a clareza das explicações e instruções fornecidas pelo professor na disciplina de ${disciplinas[id - 1].label}?`, name: "clarity_explanations", type: "text", options:["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Avalie a relevância e atualidade do conteúdo abordado na disciplina de ${disciplinas[id - 1].label} em relação às tendências da indústria.`, name: "content_relevance", type: "text", options:["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Como você avalia a disponibilidade do professor para esclarecer dúvidas e fornecer suporte adicional na disciplina de ${disciplinas[id - 1].label}?`, name: "professor_support", type: "text", options:["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Avalie a eficácia das atividades práticas e dos projetos realizados na disciplina de ${disciplinas[id - 1].label}.", name: "practical_activities_effectiveness`, type: "text", options:["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Como você avalia a integração de tecnologias e ferramentas relevantes no ensino da ${disciplinas[id - 1].label}?", name: "technology_integration", type: "text`, options:["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Avalie a abordagem de avaliação (provas, trabalhos, projetos, etc.) utilizada na disciplina de ${disciplinas[id - 1].label}.`, name: "assessment_approach", type: "text", options:["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },]
            } />
        </div>
    )
}