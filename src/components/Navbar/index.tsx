import logo from "../../assets/logo-250px.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { Container } from "./styles";
import Logo from "../Logo";

function Navbar() {
  return (
    <Container>
      <Logo style={{ marginRight: "auto" }} />
    </Container>
  );
}

export default Navbar;
