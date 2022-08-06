import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Input, Button, Link } from "../../components";
import { login } from "../../services/api";
import { Container, Main } from "./styles";

const SignIn = () => {
  const [fields, setField] = useState({
    loading: false,
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const setLoading = (value) =>
    setField((prev) => ({ ...prev, loading: value }));

  const handleField = (field, value) =>
    setField((prev) => ({ ...prev, [field]: value }));

  return (
    <Container>
      <Main>
        <img src={logo} />
        <Input id="email" placeholder="email" onChange={handleField} />
        <Input id="password" placeholder="senha" onChange={handleField} />
        <Button
          loading={fields.loading}
          disabled={fields.loading || !fields.email || !fields.password}
          label="Entrar"
          onClick={() =>
            login({
              email: fields.email,
              password: fields.password,
              setLoading,
              navigate,
            })
          }
        />
        <Link label="Não tem uma conta? Cadastre-se!" path="../cadastro" />
      </Main>
    </Container>
  );
};

export default SignIn;
