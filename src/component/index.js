import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/Home";
import CoursePage from "./page/Course";
import AnnouncementPage from "./page/Announcement";
import AssignmentPage from "./page/Assignment";
import GradePage from "./page/Grade";
import MaterialPage from "./page/Material";
import CalendarPage from "./page/Calendar";
import LibraryPage from "./page/Library";
import StudentServicePage from "./page/StudentService";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/announcement" element={<AnnouncementPage />} />
          <Route path="/assignment" element={<AssignmentPage />} />
          <Route path="/grade" element={<GradePage />} />
          <Route path="/material" element={<MaterialPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/studentservice" element={<StudentServicePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
