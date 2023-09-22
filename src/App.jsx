import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Clones from "./pages/Clones";
import { useContext, useEffect } from "react";
import { DarkThemeContext } from "./context/DarkThemeContext";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const { theme } = useContext(DarkThemeContext);
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
    </main>
  );
};

export default App;
