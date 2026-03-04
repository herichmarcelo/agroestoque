import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import DashboardPage from "./pages/DashboardPage"
import EstoquePage from "./pages/EstoquePage"
import RelatoriosPage from "./pages/RelatoriosPage"
import SaidaPage from "./pages/SaidaPage"
import EntradaPage from "./pages/EntradaPage"


export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <DashboardPage /> },
      { path: "/estoque", element: <EstoquePage /> },
      { path: "/relatorios", element: <RelatoriosPage /> },
      { path: "/estoque/saida", element: <SaidaPage /> },
      { path: "/estoque/entrada", element: <EntradaPage /> },
    ],
  },
])