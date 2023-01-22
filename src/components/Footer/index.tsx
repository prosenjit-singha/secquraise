import { Stack, Typography, colors, lighten } from "@mui/material";
import Logo from "../Logo";

function Footer() {
  return (
    <Stack
      sx={(theme) => ({
        alignItems: "center",
        gap: 1,
        py: [2, 3],
        bgcolor: lighten(theme.palette.background.paper, 0.05),
        borderTop: `1px solid ${theme.palette.divider}`,
      })}
    >
      <Logo />
      <Typography>Copyright &copy; 2023, SecqurAIse</Typography>
    </Stack>
  );
}

export default Footer;
