'use client';
import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";


export const Upgrade = () => (
  <Box sx={{ pb: 0, mt: 5 }}>
    <Box
      sx={{
        pl: 2,
        pr: 2,
        backgroundColor: (theme) => theme.palette.secondary.light,
        borderRadius: "10px",
        position: "relative",
        display: "flex"
      }}
    >
      <Box sx={{ right: "-30px", position: "absolute", width: "130px", bottom: "20px" }}>
        <Image
          src='/images/backgrounds/sidebar-buynow-bg.svg'
          alt='buyNowImg'
          className="buyNowImg"
          width={130}
          height={100}

        />
      </Box>

      <Box sx={{ pb: 3, pt: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "600", mb: 2 }}>
          Check Pro <br /> Version
        </Typography>
        <Button
          color="secondary"
          href="https://wrappixel.com/templates/spike-nextjs-admin-template/?ref=376#demos"
          target="_blank"
          disableElevation
          variant="contained"
        >
          Check
        </Button>
      </Box>
    </Box>
  </Box>
);