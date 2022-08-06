import logo from "../../assets/logo.svg";
import { Input, Button, Link } from "../../components";
import { Container } from "./styles";

const SignIn = () => {
  return (
    <Container>
      <img src={logo} />
      <Input placeholder="email" />
      <Input placeholder="senha" />
      <Button label="Entrar" />
      <Link label="Não tem uma conta? Cadastre-se!" />
    </Container>
  );
};

export default SignIn;
