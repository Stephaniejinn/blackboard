import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/Home";
import CoursePage from "./page/Course";
import AnnouncementPage from "./page/Announcement";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/announcement" element={<AnnouncementPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
