import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CourseDetail from "./components/CourseDetail";
import PartnersPage from "./components/PartnersPage";
import CoursesPage from "./components/CoursesPage";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/course/:id" element={<CourseDetail />} />
      <Route path="/partners" element={<PartnersPage />} />
    </Routes>
  );
}
