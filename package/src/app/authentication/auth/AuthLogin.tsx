import React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField";

interface loginType {
  title?: string;
  subtitle?: JSX.Element | JSX.Element[];
  subtext?: JSX.Element | JSX.Element[];
}

const AuthLogin = ({ title, subtitle, subtext }: loginType) => (
  <>
    {title ? (
      <Typography
        variant="h2"
        sx={{
          fontWeight: "700",
          mb: 1
        }}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Stack>
      <Box>
        <Typography
          variant="subtitle1"
          component="label"
          htmlFor="username"
          sx={{
            fontWeight: 600,
            mb: "5px"
          }}>
          Username
        </Typography>
        <CustomTextField variant="outlined" fullWidth />
      </Box>
      <Box sx={{
        mt: "25px"
      }}>
        <Typography
          variant="subtitle1"
          component="label"
          htmlFor="password"
          sx={{
            fontWeight: 600,
            mb: "5px"
          }}>
          Password
        </Typography>
        <CustomTextField type="password" variant="outlined" fullWidth />
      </Box>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          my: 2
        }}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remeber this Device"
          />
        </FormGroup>
        <Typography
          component={Link}
          href="/"
          sx={{
            fontWeight: "500",
            textDecoration: "none",
            color: "primary.main"
          }}>
          Forgot Password ?
        </Typography>
      </Stack>
    </Stack>
    <Box>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="/"
        type="submit"
      >
        Sign In
      </Button>
    </Box>
    {subtitle}
  </>
);

export default AuthLogin;
