import { BorderClear } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import { Plus_Jakarta_Sans } from "next/font/google";


export const plus = Plus_Jakarta_Sans({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});

const baselightTheme = createTheme({
    direction: "ltr",
    palette: {
        primary: {
            main: "#2E5BBA", // 专业医疗蓝
            light: "#E8F2FF",
            dark: "#1E3A8A",
        },
        secondary: {
            main: "#64748B", // 中性灰
            light: "#F1F5F9",
            dark: "#475569",
        },
        success: {
            main: "#10B981", // 医疗绿色
            light: "#D1FAE5",
            dark: "#059669",
            contrastText: "#ffffff",
        },
        info: {
            main: "#3B82F6", // 信息蓝
            light: "#DBEAFE",
            dark: "#1D4ED8",
            contrastText: "#ffffff",
        },
        error: {
            main: "#EF4444", // 医疗红色
            light: "#FEE2E2",
            dark: "#DC2626",
            contrastText: "#ffffff",
        },
        warning: {
            main: "#F59E0B", // 警告橙
            light: "#FEF3C7",
            dark: "#D97706",
            contrastText: "#ffffff",
        },
        grey: {
            100: "#F8FAFC",
            200: "#F1F5F9",
            300: "#E2E8F0",
            400: "#94A3B8",
            500: "#64748B",
            600: "#475569",
        },
        text: {
            primary: "#1E293B",
            secondary: "#64748B",
        },
        action: {
            disabledBackground: "rgba(100,116,139,0.12)",
            hoverOpacity: 0.04,
            hover: "#F8FAFC",
        },
        divider: "#E2E8F0",
        background: {
            default: "#F8FAFC",
            paper: "#ffffff",
        },
    },
    typography: {
        fontFamily: plus.style.fontFamily,
        h1: {
            fontWeight: 600,
            fontSize: "2.25rem",
            lineHeight: "2.75rem",
            fontFamily: plus.style.fontFamily,
        },
        h2: {
            fontWeight: 600,
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontFamily: plus.style.fontFamily,
        },
        h3: {
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: "1.75rem",
            fontFamily: plus.style.fontFamily,
        },
        h4: {
            fontWeight: 600,
            fontSize: "1.3125rem",
            lineHeight: "1.6rem",
        },
        h5: {
            fontWeight: 600,
            fontSize: "1.125rem",
            lineHeight: "1.6rem",
        },
        h6: {
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: "1.2rem",
        },
        button: {
            textTransform: "capitalize",
            fontWeight: 400,
        },
        body1: {
            fontSize: "0.875rem",
            fontWeight: 400,
            lineHeight: "1.334rem",
        },
        body2: {
            fontSize: "0.75rem",
            letterSpacing: "0rem",
            fontWeight: 400,
            lineHeight: "1rem",
        },
        subtitle1: {
            fontSize: "0.875rem",
            fontWeight: 400,
        },
        subtitle2: {
            fontSize: "0.875rem",
            fontWeight: 400,
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
                    boxShadow: "0 9px 17.5px rgb(0,0,0,0.05) !important",
                },
                ".rounded-bars .apexcharts-bar-series.apexcharts-plot-series .apexcharts-series path":
                {
                    clipPath: "inset(0 0 5% 0 round 20px)",
                },

                a: {
                    color: '#111c2d',
                    textDecoration: "none",
                },
                ' .simplebar-scrollbar:before': {
                    background: ' #DFE5EF !important',
                },

            },
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    color: '#111c2d',

                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: "8px",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "25px",
                },
                text: {
                    padding: "5px 15px",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: "25px",
                    },

                },

            },
        },


    },
});

export { baselightTheme };