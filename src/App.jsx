import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Package";
import LoginPage from "./components/common/Login";
import RegisterPage from "./components/common/RegisterPage";
import FrequentlyAsked from "./components/common/FrequentlyAsked";
import PrivacyPolicy from "./components/common/PrivacyPolicy";
import TermsConditions from "./components/common/TermsConditions";

import Footer from "./components/common/Footer";

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
      { path: "/frequentlyasked", element: <FrequentlyAsked /> },
      { path: "/privacypolicy", element: <PrivacyPolicy /> },
      { path: "/termsconditions", element: <TermsConditions /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
import { Link } from "react-router-dom";