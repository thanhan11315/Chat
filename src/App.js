import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout/index.js";
import Webchat from "./pages/webChat/index.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultLayout>
              <Webchat />
            </DefaultLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
