"use client";
import Link from "next/link";
import { Grid2 as Grid, Box, Card, Stack, Typography } from "@mui/material";
// components
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import AuthLogin from "../auth/AuthLogin";

const Login2 = () => {
  return (
    (<PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: "relative",
          "&:before": {
            content: '""',
            background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: "0.3",
          },
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{
            justifyContent: "center",
            height: "100vh"
          }}>
          <Grid
            size={{
              xs: 12,
              sm: 12,
              lg: 4,
              xl: 3
            }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
            <Card
              elevation={9}
              sx={{ p: 4, zIndex: 1, width: "100%", maxWidth: "500px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                <Logo />
              </Box>
              <AuthLogin
                subtext={
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    sx={{
                      textAlign: "center",
                      mb: 1
                    }}>
                    Your Social Campaigns
                  </Typography>
                }
                subtitle={
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      justifyContent: "center",
                      mt: 3
                    }}>
                    <Typography
                      color="textSecondary"
                      variant="h6"
                      sx={{
                        fontWeight: "500"
                      }}
                    >
                      New to Spike?
                    </Typography>
                    <Typography
                      component={Link}
                      href="/authentication/register"
                      sx={{
                        fontWeight: "500",
                        textDecoration: "none",
                        color: "primary.main"
                      }}>
                      Create an account
                    </Typography>
                  </Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>)
  );
};
export default Login2;
