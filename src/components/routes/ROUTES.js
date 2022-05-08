import { Route, Routes } from "react-router-dom";

import { HomePage } from "../screens/HomePage";
import { Projects } from "../screens/Projects";

export const ROUTES =() => {
  return(
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="sobre" element={<HomePage />} />
      <Route path="projetos" element={<Projects />} />
    </Routes>
  )
}