import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"
import Teachers from "./pages/Teachers";
import Courses from "./pages/Courses";
import Subjects from "./pages/Subjects";
import Base from "./pages/Base";


export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Base />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/professores/:id" element={<Teachers />} />
                    <Route path="/cursos/:id" element={<Courses />} />
                    <Route path="/disciplinas/:id" element={<Subjects />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}