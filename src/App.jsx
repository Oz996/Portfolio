import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Clones from "./pages/Clones";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { ToastContainer, Zoom } from "react-toastify";

const App = () => {
  const { theme } = useTheme();
  document.body.style.background = theme;
  useEffect(() => {
    document.body.style.background = theme.bg;
  }, [theme]);

  return (
    <main
      style={{
        color: theme.ui,
        height: "100vh",
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="clones" element={<Clones />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        transition={Zoom}
      />
    </main>
  );
};

export default App;
