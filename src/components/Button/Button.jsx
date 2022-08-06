import { ThreeDots } from "react-loader-spinner";
import { StyledButton } from "./styles";

const Button = ({ label, loading, disabled, onClick }) => {
  const children =
    label && !loading ? (
      label
    ) : (
      <ThreeDots
        height="14"
        width="50"
        radius="9"
        color="#FFFFFF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    );

  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
