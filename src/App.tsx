import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import User from "./pages/user/User";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">{/* Para agregarle archivos de estilos de manera general */}
        <Navbar />{/* Componente compun a todas las páginas de la navegación */}
        {/*Una observación general en base al ToDoList que ya hice, sería tener una secció SectionMain.jsx y ahi meter los componentes que vienen abajo */}
        <div className="container">{/* Container para las diferentes páginas de la navegación */}
          <div className="menuContainer">{/* Container para el menú de navegación */}
            <Menu />{/* El menú se carga a traves del archivoi data.ts con map */}
          </div>
          <div className="contentContainer"> {/* Las diferentes páginas de la navegación */}
            <QueryClientProvider client={queryClient}>
              <Outlet /> {/* Con este elemento la navegación se hace de manera dinamica */}
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
