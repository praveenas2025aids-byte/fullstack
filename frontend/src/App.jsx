
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/login";
import Projects from "./pages/projects";
import Tasks from "./pages/tasks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
