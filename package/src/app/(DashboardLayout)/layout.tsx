"use client";
import { styled, Container, Box } from "@mui/material";
import React, { useState } from "react";
import Header from "@/app/(DashboardLayout)/layout/header/Header";
import Sidebar from "@/app/(DashboardLayout)/layout/sidebar/Sidebar";

import Topbar from "./layout/header/Topbar";
import theme from "@/utils/theme";
import Footer from "./layout/footer/page";

const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "25px",
  flexDirection: "column",
  backgroundColor: "transparent",
}));




export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <MainWrapper className="mainwrapper">

      <PageWrapper className="page-wrapper">
        <Topbar />


        {/* ------------------------------------------- */}
        {/* Sidebar */}
        {/* ------------------------------------------- */}

        <Sidebar
        />
        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}
        <Box
          sx={{

            [theme.breakpoints.up("lg")]: {
              marginLeft: '270px',
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Header */}
          {/* ------------------------------------------- */}
          <Header />
          <Container
            sx={{
              paddingTop: "20px",
              maxWidth: "1200px",

            }}
          >


            {/* ------------------------------------------- */}
            {/* Page Route */}
            {/* ------------------------------------------- */}
            <Box sx={{ minHeight: "calc(100vh - 290vh)" }}>{children}</Box>

            <Footer />

          </Container>
        </Box>
      </PageWrapper>
    </MainWrapper>
  );
}

