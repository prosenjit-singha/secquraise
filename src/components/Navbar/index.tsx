import logo from "../../assets/logo-250px.png";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import {
  BsGenderMale as MaleIcon,
  BsGenderFemale as FemaleIcon,
} from "react-icons/bs";
import { Chips, Container } from "./styles";
import Logo from "../Logo";
import Chip from "../styled/Chip";

function Navbar() {
  return (
    <Container>
      <Logo style={{ marginRight: "auto" }} />

      {/* Male & Female */}
      <Chips>
        <Chip color="success" startIcon={<MaleIcon />}>
          20
        </Chip>
        <Chip color="error" startIcon={<FemaleIcon />}>
          25
        </Chip>
      </Chips>
    </Container>
  );
}

export default Navbar;
