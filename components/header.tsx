"use client"

import type React from "react"

import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useScrollTrigger,
  Slide,
} from "@mui/material"
import { styled } from "@mui/system"
import { MenuIcon } from "lucide-react"
import { useTheme } from "@mui/material/styles"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
]

const Logo = styled("div")(({ theme }) => ({
  fontWeight: 700,
  fontSize: "1.8rem",
  color: "white",
  display: "flex",
  alignItems: "center",
  "& span": {
    color: theme.palette.primary.main,
  },
  //color:'#16204c'
}))

const NavLink = styled(Button)(({ theme }) => ({
  margin: "0 8px",
  color: theme.palette.text.primary,
  fontWeight: 500,
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0",
    height: "2px",
    bottom: "0",
    left: "50%",
    backgroundColor: theme.palette.primary.main,
    transition: "width 0.3s ease, left 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
    left: "0",
  },
}))

const ContactButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#000",
  marginLeft: "16px",
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "#d6a00e",
  },
}))

const HideOnScroll = ({ children }: { children: React.ReactElement }) => {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "var(--background-dark)", height: "100%" }}
    >
      <Box sx={{ display: { xs: "flex", md: "flex" }, alignItems: "center", gap: 0, mt: 2, ml: 2 }}>
        <img src="/logo.png" style={{height:'50px'}}/>
        <Logo>
          Digital<span>Labs</span>
        </Logo>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemText
              primary={item.name}
              onClick={() => handleNavClick(item.href)}
              sx={{
                textAlign: "center",
                py: 1,
                "& .MuiTypography-root": {
                  fontSize: "1.1rem",
                  fontWeight: 500,
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: scrolled ? "rgba(5, 5, 5, 0.9)" : "transparent",
            backdropFilter: scrolled ? "blur(10px)" : "none",
            boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "none",
            transition: "background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
            py: scrolled ? 1 : 2,
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: { xs: "flex", md: "flex" }, alignItems: "center", gap: 0 }}>
              <img src="/logo.png" style={{height:'50px'}}/>
              <Logo>
                Digital<span>Labs</span>
              </Logo>
            </Box>
            
            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              {navItems.map((item) => (
                <NavLink key={item.name} onClick={() => handleNavClick(item.href)}>
                  {item.name}
                </NavLink>
              ))}
              <ContactButton variant="contained" onClick={() => handleNavClick("#contact")}>
                Get in Touch
              </ContactButton>
            </Box>
            {isMobile && (
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: "none" }, color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar sx={{ mb: { xs: 4, md: 6 } }} /> {/* Spacer */}
    </>
  )
}
