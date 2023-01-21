import { styled, css } from "@mui/material";

type Props = {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
} & React.ComponentProps<typeof Container>;

const Chip = ({ children, startIcon, endIcon, ...rest }: Props) => {
  return (
    <Container {...rest}>
      {startIcon}
      {children}
      {endIcon}
    </Container>
  );
};

export default Chip;

interface Chip {
  color?: string;
}

const Container = styled("span")<Chip>`
  padding: 0.25rem 0.5rem;
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ${(p) => getColors(p.color || "")};
`;

function getColors(color: string) {
  switch (color) {
    case "success":
      return css`
        background-color: hsl(var(--success-main));
        color: hsl(var(--on-success));
      `;
    case "error":
      return css`
        background-color: hsl(var(--error-main));
        color: hsl(var(--on-error));
      `;
    default:
      return css`
        background-image: var(--paper-5);
      `;
  }
}
