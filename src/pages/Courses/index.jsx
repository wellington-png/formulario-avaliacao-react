import RatingForm from "../../components/RatingForm"
import { useParams } from 'react-router-dom';
import menus from "../../datas/menu";

export default function Courses() {
    const { id } = useParams();
    const cursos = menus.cursos;
    return (
        <div>
            <h1>Avaliação do curso {cursos[id-1].label} </h1>
            <RatingForm fields={[
                { label: `Avalie a qualidade do conteúdo ensinado no curso de ${cursos[id-1].label}.`, name: "content_quality", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Como você avalia a organização do curso de ${cursos[id-1].label}?`, name: "course_organization", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Avalie a capacidade dos instrutores em explicar conceitos complexos.`, name: "instructor_explanation", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Como você avalia o suporte e disponibilidade dos professores para esclarecer dúvidas?`, name: "instructor_support", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Avalie a relevância dos projetos práticos ou laboratórios no curso de ${cursos[id-1].label}.`, name: "practical_projects_relevance", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Avalie a infraestrutura tecnológica disponível para o curso de ${cursos[id-1].label}.`, name: "technology_infrastructure", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Avalie a disponibilidade de recursos de aprendizado, como livros e materiais complementares.`, name: "learning_resources", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Avalie a abordagem do curso em relação à resolução de problemas reais na área de ${cursos[id-1].label}.`, name: "real_world_problem_solving", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Como você avalia a preparação do curso para o mercado de trabalho em ${cursos[id-1].label}?`, name: "job_market_preparation", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] },
                { label: `Avalie a colaboração e interação entre os alunos no curso de ${cursos[id-1].label}.`, name: "student_collaboration", type: "text", options: ["(1) Muito insatisfatório", "(2) Insatisfatório", "(3) Neutro", "(4) Satisfatório", "(5) Muito satisfatório"] }
            ]} />
        </div>
    )
}