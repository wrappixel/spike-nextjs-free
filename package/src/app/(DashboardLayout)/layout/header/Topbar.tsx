import { Box, AppBar, Toolbar, styled, Stack, Button, Chip } from "@mui/material";

import { IconLifebuoy, IconGift, IconBriefcase } from "@tabler/icons-react";
import { Typography } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";
// import LivePreviewDropdown from "./LivePreviewDropdown";

const Topbar = () => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: "linear-gradient(90deg,#2E5BBA 0,#3B82F6 100%)", // Medical blue gradient
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      minHeight: "72px",
    },
    zIndex: 9,
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  const GhostButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    backgroundColor: "#ffffff00",
    boxShadow: "none",
    borderRadius: "7px",
    fontWeight: 400,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    "& .MuiButton-startIcon": {
      marginRight: "4px",
    },
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled sx={{ padding: "16px 24px", justifyContent: "space-between", flexDirection: { md: "row", xs: "column" }, gap: "16px", display: { md: "flex" } }}>
        <Stack
          spacing={{ xs: 1, sm: 2.5 }}
          direction="row"
          useFlexGap
          sx={{
            alignItems: "center",
            display: { xs: "none", md: "flex" }
          }}
        >
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
            Medical Dashboard
          </Typography>
          <Stack
            direction="row"
            sx={{ gap: "16px", paddingLeft: "20px", borderLeft: "1px solid rgba(255,255,255,.4)", display: { xs: "none", lg: "flex" } }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GhostButton sx={{ gap: "8px", padding: "0", fontSize: "16px", ":hover": { color: "#2E5BBA", backgroundColor: "transparent" } }}>
                <Icon icon="mdi:medical-bag" width={20} />
                Patient Records
              </GhostButton>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GhostButton sx={{ gap: "8px", padding: "0", fontSize: "16px", ":hover": { color: "#2E5BBA", backgroundColor: "transparent" } }}>
                <Icon icon="mdi:heart-pulse" width={20} />
                Vital Signs
              </GhostButton>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GhostButton sx={{ gap: "8px", padding: "0", fontSize: "16px", ":hover": { color: "#2E5BBA", backgroundColor: "transparent" } }}>
                <Icon icon="mdi:pill" width={20} />
                Medications
              </GhostButton>
            </Box>
          </Stack>
        </Stack>
        
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" }, gap: "16px", display: { md: "flex" }
          }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Chip 
              label="BP: 120/80" 
              sx={{ 
                backgroundColor: "rgba(255,255,255,0.2)", 
                color: "white",
                fontWeight: "bold"
              }} 
            />
            <Chip 
              label="HR: 72 bpm" 
              sx={{ 
                backgroundColor: "rgba(255,255,255,0.2)", 
                color: "white",
                fontWeight: "bold"
              }} 
            />
            <Chip 
              label="SpO₂: 98%" 
              sx={{ 
                backgroundColor: "rgba(255,255,255,0.2)", 
                color: "white",
                fontWeight: "bold"
              }} 
            />
          </Stack>

          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              flexDirection: { md: "row", xs: "column" }, gap: "10px", display: { md: "flex" }
            }}
          >
            <Button sx={{ gap: "8px", borderRadius: "7px", backgroundColor: "rgba(255,255,255,0.2)", fontSize: "16px", color: "white", ":hover": { backgroundColor: "rgba(255,255,255,0.3)" } }} variant="contained">
              <Icon icon="mdi:bell" width={18} />
              Alerts
            </Button>
            <Button sx={{ gap: "8px", borderRadius: "7px", backgroundColor: "rgba(255,255,255,0.2)", fontSize: "16px", color: "white", ":hover": { backgroundColor: "rgba(255,255,255,0.3)" } }} variant="contained">
              <Icon icon="mdi:account-multiple" width={18} />
              Patients
            </Button>
          </Stack>
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Topbar;
