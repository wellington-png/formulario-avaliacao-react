import { Link } from "react-router-dom";
import logo from "../../assets/ifpi_logo.png";
import SideBarContainer from "./styles";

export default function SideBar({ menus }) {

    return (
        <SideBarContainer>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <div className="title_pesq">
                            <span>Cursos</span>
                        </div>
                        <ul className="tipos">
                            {menus.cursos.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <div className="title_pesq">
                            <span>Professores</span>
                        </div>
                        <ul className="tipos">
                            {menus.professores.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <div className="title_pesq">
                            <span>Professores</span>
                        </div>

                        <ul className="tipos">
                            {menus.disciplinas.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        </SideBarContainer>
    )
}