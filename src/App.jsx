import "./App.css";
import Footer from "./components/common/Footer";
import LoginPage from "./components/common/Login";
import Navbar from "./components/common/Navbar";
import RegisterPage from "./components/common/RegisterPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Package";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/package", element: <Packages /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
