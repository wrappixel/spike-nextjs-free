import { IconButton, Box, AppBar, Menu, MenuItem, Typography, useMediaQuery, Toolbar, styled, Stack, Button, Badge } from '@mui/material';
import Profile from './Profile';
import { useEffect, useState, useContext } from 'react';
import { Icon } from '@iconify/react';
import { DashboardContext } from '@/app/context/DashboardContext';
import { IconBellRinging } from "@tabler/icons-react";
import Notification from './Notification'

const Header = () => {
  const [_height, setHeight] = useState('0px');






  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px',
    },
    zIndex: 'unset'
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary,
  }));


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setHeight('0px');
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { isMobileSidebar, setIsMobileSidebar } = useContext(DashboardContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <>
      <AppBarStyled position="sticky" color="default">
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => setIsMobileSidebar(!isMobileSidebar)}

            sx={{
              display: {
                lg: "none",
                xs: "inline",
              },
            }}
          >
            <Icon icon="solar:list-bold" height={20} />
          </IconButton>

          <Notification />


          <Box flexGrow={1} />
          <>
            <Stack spacing={2} direction="row" alignItems="center">
              <Button variant="contained" color="primary" target="_blank" href="https://www.wrappixel.com/templates/spike-nextjs-admin-template/?ref=376#demos">
                Check Pro Template
              </Button>
              <Profile />
            </Stack>
          </>


        </ToolbarStyled>
      </AppBarStyled>
    </>
  );
};

export default Header;