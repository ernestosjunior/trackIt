import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn, SignUp, Habits, Today, Historic } from "./pages";
import { ProtectedRoutes } from "./components";
import { RootProvider } from "./store";

function App() {
  return (
    <BrowserRouter>
      <RootProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />

          <Route
            path="/habitos"
            element={
              <ProtectedRoutes>
                <Habits />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/hoje"
            element={
              <ProtectedRoutes>
                <Today />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/historico"
            element={
              <ProtectedRoutes>
                <Historic />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </RootProvider>
    </BrowserRouter>
  );
}

export default App;
