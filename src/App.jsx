import { PATHS } from "./constants/routes";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Suplies from "./pages/Supplies";
import Recipes from "./pages/Recipes";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-full">
        <Routes>
          <Route index path={PATHS.HOME} element={<></>} />
          <Route path="*" element={<></>} />
          <Route path={PATHS.SUPPLIES} element={<Suplies />} />
          <Route path={PATHS.RECIPES} element={<Recipes />} />
          <Route path={PATHS.COSTS} element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
