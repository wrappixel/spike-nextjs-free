import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Link  from 'next/link';

import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';

interface registerType {
    title?: string;
    subtitle?: JSX.Element | JSX.Element[];
    subtext?: JSX.Element | JSX.Element[];
  }

const AuthRegister = ({ title, subtitle, subtext }: registerType) => (
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

        <Box>
            <Stack sx={{
                mb: 3
            }}>
                <Typography
                    variant="subtitle1"
                    component="label"
                    htmlFor='name'
                    sx={{
                        fontWeight: 600,
                        mb: "5px"
                    }}>Name</Typography>
                <CustomTextField id="name" variant="outlined" fullWidth />

                <Typography
                    variant="subtitle1"
                    component="label"
                    htmlFor='email'
                    sx={{
                        fontWeight: 600,
                        mb: "5px",
                        mt: "25px"
                    }}>Email Address</Typography>
                <CustomTextField id="email" variant="outlined" fullWidth />

                <Typography
                    variant="subtitle1"
                    component="label"
                    htmlFor='password'
                    sx={{
                        fontWeight: 600,
                        mb: "5px",
                        mt: "25px"
                    }}>Password</Typography>
                <CustomTextField id="password" variant="outlined" fullWidth />
            </Stack>
            <Button color="primary" variant="contained" size="large" fullWidth component={Link} href="/authentication/login">
                Sign Up
            </Button>
        </Box>
        {subtitle}
    </>
);

export default AuthRegister;
