"use client"

import { useEffect, useRef } from "react"
import { Box, Container, Typography, Button, Grid } from "@mui/material"
import { styled } from "@mui/system"
import { ChevronRight } from "lucide-react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: "90vh",
  marginTop: "-15px",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "#050505",
  backgroundImage:
    "radial-gradient(circle at 20% 80%, rgba(23, 31, 77, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(255, 186, 7, 0.1) 0%, transparent 40%)",
}))

const GlowEffect = styled(Box)({
  position: "absolute",
  width: "30vw",
  height: "30vw",
  borderRadius: "50%",
  filter: "blur(80px)",
  opacity: 0.2,
  zIndex: 0,
})

const TypingText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
  overflow: "hidden",
  position: "relative",
  "&::after": {
    content: '"|"',
    color: theme.palette.primary.main,
    animation: "blink 1s step-start infinite",
  },
  "@keyframes blink": {
    "50%": {
      opacity: 0,
    },
  },
}))

const CTA = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#000",
  padding: "12px 24px",
  fontSize: "1.1rem",
  marginRight: theme.spacing(2),
  "&:hover": {
    backgroundColor: "#d6a00e",
  },
}))

const SecondaryButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  padding: "12px 24px",
  fontSize: "1.1rem",
  "&:hover": {
    borderColor: "#d6a00e",
    backgroundColor: "rgba(255, 186, 7, 0.1)",
  },
}))

export default function HeroSection() {
  const typingRef = useRef<HTMLHeadingElement>(null)

  //const particlesInit = async (engine: Engine) => {
  //  await loadFull(engine)
  //}

  useEffect(() => {
    // Typing effect for the heading
    const heading = typingRef.current
    if (!heading) return

    const text = "We build exceptional digital experiences"
    let currentIndex = 0
    heading.textContent = ""

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        heading.textContent += text[currentIndex]
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <HeroContainer id="hero">
      {/* Background elements */}
      <GlowEffect
        sx={{
          top: "20%",
          left: "60%",
          backgroundColor: "#171f4d",
        }}
      />
      <GlowEffect
        sx={{
          bottom: "10%",
          left: "20%",
          backgroundColor: "#ffba07",
          opacity: 0.1,
        }}
      />

      <Particles
        id="hero-particles"
        //init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ["#ffffff", "#ffba07"],
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.3,
              random: true,
            },
            size: {
              value: 2,
              random: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.1,
              width: 1,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
          },
          retina_detect: true,
          background: {
            color: "transparent",
          },
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7} className="animate-fadeInUp">
            <Typography
              variant="h6"
              color="primary"
              sx={{
                fontWeight: 600,
                mb: 2,
                opacity: 0,
                animation: "fadeInUp 0.8s forwards 0.2s",
              }}
            >
              PREMIUM SOFTWARE DEVELOPMENT
            </Typography>
            <TypingText
              variant="h1"
              ref={typingRef}
              sx={{
                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                opacity: 0,
                animation: "fadeInUp 0.8s forwards 0.4s",
              }}
            />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: "1.1rem",
                mb: 4,
                maxWidth: "600px",
                opacity: 0,
                animation: "fadeInUp 0.8s forwards 0.6s",
              }}
            >
              We craft cutting-edge software solutions that transform businesses through innovation, precision, and
              uncompromising quality.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
                opacity: 0,
                animation: "fadeInUp 0.8s forwards 0.8s",
              }}
            >
              <CTA variant="contained" endIcon={<ChevronRight />} onClick={() => scrollToSection("#contact")}>
                Start Your Project
              </CTA>
              <SecondaryButton variant="outlined" onClick={() => scrollToSection("#projects")}>
                View Our Work
              </SecondaryButton>
            </Box>
          </Grid>
          
        </Grid>
      </Container>
    </HeroContainer>
  )
}
