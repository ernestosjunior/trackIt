import { Container, Card, Check } from "./styles";
import check from "../../assets/check.svg";

const TodayCard = ({
  done,
  name,
  currentSequence,
  highestSequence,
  onClick,
}) => {
  const isHighest = highestSequence && currentSequence >= highestSequence;
  return (
    <Container>
      <Card>
        <div className="left">
          <h1>{name}</h1>
          <span>
            <p>Sequência atual:</p>
            <p className={isHighest ? "green" : ""}>{currentSequence}</p>
          </span>
          <span>
            <p>Seu recorde:</p>
            <p className={isHighest ? "green" : ""}>{highestSequence}</p>
          </span>
        </div>
        <Check selected={done} onClick={onClick}>
          <img src={check} alt="" />
        </Check>
      </Card>
    </Container>
  );
};

export default TodayCard;
