import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Wink } from "./pages/Wink";
import { Wall } from "./pages/Wall";
import { Pay } from "./pages/Pay";
import { Request } from "./pages/Request";
import { Payroll } from "./pages/Payroll";
import { Dashboard } from "./pages/Dashboard";
import { Agents } from "./pages/Agents";
import { Docs } from "./pages/Docs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/wink/:handle" element={<Wink />} />
          <Route path="/wall/:slug" element={<Wall />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/pay/:code" element={<Pay />} />
          <Route path="/request/:handle" element={<Request />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
