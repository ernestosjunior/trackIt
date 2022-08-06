import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp, Habits } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/habitos" element={<Habits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
