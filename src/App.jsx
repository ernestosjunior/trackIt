import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignIn, SignUp, Habits, Today, Historic } from "./pages";
import { ProtectedRoutes } from "./components";
import { RootProvider } from "./store";

function App() {
  const { token } = JSON.parse(window.localStorage.getItem("user")) || {
    token: "",
  };

  return (
    <BrowserRouter>
      <RootProvider>
        <Routes>
          <Route
            path="/"
            element={!token ? <SignIn /> : <Navigate to="/habitos" replace />}
          />
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
