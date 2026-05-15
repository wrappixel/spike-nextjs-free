'use client';
import { Box, Typography } from "@mui/material";
import Link from "next/link";
const Footer = () => {
    return (
        <Box sx={{ pt: 6, textAlign: "center" }}>

            <Typography variant="h6" sx={{ fontWeight: 400, color: 'textSecondary' }}>

                Design and Developed by{" "}
                <Typography component="span" sx={{ 'a': { color: "primary.main" } }}>
                    <Link href="https://wrappixel.com" target="blank" style={{ textDecoration: "underline", fontSize: "1rem" }}>
                        Wrappixel.com
                    </Link> </Typography>{" "}

            </Typography>
        </Box >
    );
};

export default Footer;
