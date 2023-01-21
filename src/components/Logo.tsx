import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import logo from "../assets/logo-250px.png";

type Props = Omit<React.ComponentProps<typeof Container>, "to">;

function Logo(props: Props) {
  return (
    <Container style={props.style} to="/">
      <Image src={logo} alt="SecqurAIse" />
    </Container>
  );
}

export default Logo;

const Image = styled("img")``;

const Container = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
