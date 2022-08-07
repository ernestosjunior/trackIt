import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Input, Button, Link } from "../../components";
import { signUp } from "../../services/api";
import { Container, Main } from "../SignIn/styles";

const SignUp = () => {
  const [fields, setField] = useState({
    loading: false,
    email: "",
    name: "",
    image: "",
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
        <Input id="name" placeholder="nome" onChange={handleField} />
        <Input id="image" placeholder="foto" onChange={handleField} />
        <Button
          loading={fields.loading}
          disabled={
            fields.loading ||
            !fields.email ||
            !fields.password ||
            !fields.name ||
            !fields.image
          }
          label="Cadastrar"
          onClick={() =>
            signUp({
              email: fields.email,
              password: fields.password,
              image: fields.image,
              name: fields.name,
              setLoading,
              navigate,
            })
          }
        />
        <Link label="Já tem uma conta? Faça login!" path="../" />
      </Main>
    </Container>
  );
};

export default SignUp;
