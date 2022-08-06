import { Button, Input, Link } from "./components";

function App() {
  return (
    <>
      <Input type="text" placeholder="Seu nome aqui..." />
      <Button label="Enviar" loading={false} disabled />
      <Link label="Crie uma conta" path={""} />
    </>
  );
}

export default App;
