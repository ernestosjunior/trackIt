import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp, Habits } from "./pages";
import { RootProvider } from "./store";

function App() {
  return (
    <BrowserRouter>
      <RootProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/habitos" element={<Habits />} />
        </Routes>
      </RootProvider>
    </BrowserRouter>
  );
}

export default App;
