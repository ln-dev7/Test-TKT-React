import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import DashboardCompany from "./Pages/Company";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/company/:id" element={<DashboardCompany />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
