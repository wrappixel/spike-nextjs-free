import { Box, Typography, Button } from "@mui/material";
import img1 from "public/images/backgrounds/rocket.png";
import Image from "next/image";
import Link from "next/link";

export const Upgrade = () => {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      gap={2}
      sx={{ m: 3}}
    >
      <>
        <Button
          color="primary"
          target="_blank"
          disableElevation
          component={Link}
          href="https://www.wrappixel.com/templates/spike-nextjs-admin-template/"
          variant="contained"
          aria-label="logout"
          size="large" sx={{width: "100%"}}
        >
          Upgrade
        </Button>
      </>
    </Box>
  );
};
