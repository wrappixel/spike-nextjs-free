"use client";
import React from "react";
import {
  FormControlLabel,
  Button,
  TextField,
  Checkbox,
  FormLabel,
} from "@mui/material";
import DashboardCard from "@/app/(DashboardLayout)/components/shared/DashboardCard";

const LoginForm = () => {
  const [state, setState] = React.useState({
    checkedB: false,
  });

  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <DashboardCard title="Login Form">
      <form>
        <FormLabel htmlFor="email-address">Email</FormLabel>

        <TextField
          id="email-address"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mt: "8px",
            mb: "16px",
          }}
        />

        <FormLabel htmlFor="ordinary-outlined-password-input">
          Password
        </FormLabel>

        <TextField
          id="ordinary-outlined-password-input"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            mt: "8px",
            mb: "16px",
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Check Me Out!"
          sx={{
            mb: 1,
          }}
        />
        <div>
          <Button color="primary" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </DashboardCard>
  );
};

export default LoginForm;
