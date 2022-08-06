import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Container } from "./styles";

const BaseLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <section>{children}</section>
      <Footer />
    </Container>
  );
};

export default BaseLayout;
