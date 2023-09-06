import NavBar from "../../components/NavBar"
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import Container from "../../components/Container"
import { Outlet } from "react-router-dom";
import  menus  from "../../datas/menu";

import  ContentWrapper  from "./styles";


export default function Base() {

    return (
        <ContentWrapper>
            <SideBar menus={menus} />
            <NavBar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </ContentWrapper>
    )
}