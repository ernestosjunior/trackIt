import React from "react";
import logo from "../../assets/logo-text.svg";
import noPhoto from "../../assets/noPhoto.jpeg";
import { Container, Avatar, Logo } from "./styles";

const Header = () => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const src = user && user.img ? user.img : noPhoto;

  return (
    <Container>
      <Logo src={logo} />
      <Avatar src={src} />
    </Container>
  );
};

export default Header;
