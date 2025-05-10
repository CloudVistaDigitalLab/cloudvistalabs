"use client"

import type React from "react"

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { styled } from "@mui/system"

// Create a custom dark theme with our required colors
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffba07",
    },
    secondary: {
      main: "#171f4d",
    },
    background: {
      default: "#050505",
      paper: "#0a0a0a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          padding: "10px 24px",
        },
      },
    },
  },
})

const RootWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
})

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RootWrapper>{children}</RootWrapper>
    </MuiThemeProvider>
  )
}
