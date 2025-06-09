// import Aj from "./pages/Aj.jsx";
// import { Routes, Route, useLocation } from "react-router-dom";
// import Header from "./components/Header.jsx";
// import Card from "./components/Card.jsx";
// import Footer from "./components/Footer.jsx";
// import Button from "./components/Button.jsx";
// import Navbar from "./components/Navbar.jsx";
// import "./App.css";
// import React, { useState, useEffect } from "react";
// import About from "./pages/About.jsx";
// import Contact from "./pages/Contact.jsx";
// import NotFound from "./pages/NotFound.jsx";
// import { Outlet } from "react-router-dom";

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const root = window.document.documentElement;
//     if (darkMode) {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }
//   }, [darkMode]);

//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   const isHomePage = location.pathname === "/";

//   const path = location.pathname;
//   const isNotFoundPage = !["/", "/about", "/aj", "/contact"].includes(path);

//   return (
//     <>
//       <div className="bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white transition-all duration-300">
//       <Navbar />
//         <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
//           <Outlet />
//         </main>
//       <Footer />
//       </div>
//     </>
//   );
// }

// export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";
import Navbar from "./components/Navbar.jsx";
import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Outlet } from "react-router-dom";
import Orders from "./pages/Orders.jsx";
import { AuthProvide } from "./context/AuthContext.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const isHomePage = location.pathname === "/";

  const path = location.pathname;
  // const isNotFoundPage = !["/", "/about", "/contact", "/fiction", "/nonfiction" ,"/hightlights"].includes(path);

  return (
    <>
      <AuthProvide>
        {/* min-h-screen */}
        <div className="bg-gray-100 dark:bg-black text-black dark:text-white transition-all duration-300">
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

          {/* mx-auto px-4 py-6 */}
          <main className="min-h-screen max-w-screen">
            <Outlet />
          </main>

          <Footer />
        </div>
      </AuthProvide>
    </>
  );
}

export default App;

// ******* asdsadsadaas *******
{
  /* <nav>Navbar</nav>
<main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
<Outlet />
</main>
<footer>Footer</footer> */
}
// ******* asdsadasdsaa *******

// ******* Only Home Card Button Footer *******
// {/* <div className="p-8">
//   <Routes>
//     <Route
//       path="/"
//       element={
//         <>
//           <h1 className="mt-6 text-3xl font-bold">Welcome to StBookinary</h1>
//           <p className="mt-2 text-lg">StBookinary shop</p>

//           <div className="mt-6 space-y-4 outline-amber-300 border-1"></div>
//         </>
//       }
//     />
//   </Routes>
// </div>; */}
// ******* Only Home Card Button Footer *******

// ******* route อื่น *******
//  {/* หน้า About หรืออื่นๆ */}
//     {/* <Route path="/about" element={<About />} /> */}

//     {/* เพิ่ม Route อื่นๆ ตามต้องการ */}
//     {/* <Route path="/aj" element={<Aj />} />
//     <Route path="/contact" element={<Contact />} /> */}

//     {/* หน้าหลุด path ทั้งหมด */}
//     {/* <Route path="*" element={<NotFound />} /> */}
// ******* route อื่น *******
