import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import DashboardCompany from "./Pages/DashboardCompany";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard/company" element={<DashboardCompany />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
