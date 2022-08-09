import Header from "../Header/Header";
import { useRoot } from "../../store";
import Footer from "../Footer/Footer";
import { extractPercent } from "../../utils/extractPercent";
import { Container } from "./styles";

const BaseLayout = ({ children }) => {
  const {
    rootState: { habitsToday },
  } = useRoot();
  return (
    <Container isMobile={window.innerWidth <= 900}>
      <Header />
      <section>{children}</section>
      <Footer percentage={extractPercent(habitsToday)} />
    </Container>
  );
};

export default BaseLayout;
