import HomeContainer from "./style"

import ADS from "../../assets/TADS.jpg"

export default function Home() {
    return (
        <HomeContainer>
            <div className="row">
                <div className="card">
                    <div className="card-header">
                        <h1>Você ainda não avalios os curos</h1>
                    </div>
                    <div className="card-body">
                        <img src={ADS} alt="" />
                        <h2>ADS</h2>
                        <p>Descrição do curso</p>
                    </div>
                    <div className="card-footer">
                        <p>
                            clique no botão abaixo para avaliar o curso
                        </p>
                        <button>
                            Avaliar
                        </button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h1>Você ainda não avalios as disciplinas</h1>
                    </div>
                    <div className="card-body">
                        <img src='' alt="" />
                        <h2>Programação WEB II</h2>
                        <p>Descrição do curso</p>
                    </div>
                    <div className="card-footer">
                        <p>
                            clique no botão abaixo para avaliar a disciplina
                        </p>
                        <button>
                            Avaliar
                        </button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h1>Você ainda não avalios as disciplinas</h1>
                    </div>
                    <div className="card-body">
                        <img src="" alt="" />
                        <h2>Nome do curso</h2>
                        <p>Descrição do curso</p>
                    </div>
                    <div className="card-footer">
                        <p>
                            clique no botão abaixo para avaliar a disciplina
                        </p>
                        <button>
                            Avaliar
                        </button>
                    </div>
                </div>

            </div>
        </HomeContainer>

    )
}