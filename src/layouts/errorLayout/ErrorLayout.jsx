import Navbar from "../../components/navbarComponent/Navbar";
import Footer from "../../components/footer/Footer";

import { Outlet } from "react-router";

export default function ErrorLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}
