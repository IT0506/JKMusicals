import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import FloatingButtons from "./FloatingButtons.jsx";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
      <FloatingButtons />
      <Footer />
    </>
  );
}