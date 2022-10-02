import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout/index.jsx";
import Webchat from "./pages/webChat/index.jsx";
import Login from "./pages/login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/chat"
          element={
            <DefaultLayout>
              <Webchat />
            </DefaultLayout>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
