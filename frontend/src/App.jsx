
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./pages/login";
import Projects from "./pages/projects";
import Tasks from "./pages/Tasks";
import Team from "./pages/team";
import Clients from "./pages/clients";
import Dashboard from "./pages/dashboard";
import Calender from "./pages/calender";
import Settings from "./pages/settings";
import Register from "./pages/register";
import Admin from "./pages/Admin/adminlayout";
import Userdetails from "./pages/Admin/userdetails";
import AdminDashboard from "./pages/Admin/dashboard";
import AdminSettings from "./pages/Admin/settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/clients" element={<Clients/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/calender" element={<Calender/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Admin/>}>
          <Route path="dashboard" element={<AdminDashboard/>}/>
          <Route path="settings" element={<AdminSettings/>}/>
          <Route path="userdetails" element={<Userdetails/>}/>
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
