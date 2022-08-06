import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/cadastro" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
