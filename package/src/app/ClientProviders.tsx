"use client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { baselightTheme } from "@/utils/theme/DefaultColors";
import { DashboardContextProvider } from './context/DashboardContext';

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={baselightTheme}>
      <DashboardContextProvider>
        <CssBaseline />
        {children}
      </DashboardContextProvider>
    </ThemeProvider>
  );
}

