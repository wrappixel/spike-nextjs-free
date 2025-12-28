import Link from "next/link";
import { styled, Typography } from "@mui/material";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block",
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Typography component="span" sx={{ lineHeight: "70px", fontSize: "22px", fontWeight: 700 }}>
        health dashboard
      </Typography>
    </LinkStyled>
  );
};

export default Logo;
