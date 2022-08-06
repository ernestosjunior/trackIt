import { Button, Input } from "./components";

function App() {
  return (
    <>
      <Input type="text" placeholder="Seu nome aqui..." />
      <Button label="Enviar" loading={false} disabled />
    </>
  );
}

export default App;
