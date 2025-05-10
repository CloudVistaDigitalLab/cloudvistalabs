"use client"

import { useRef, useEffect } from "react"
import { Box, Container, Typography, Button, Grid } from "@mui/material"
import { styled } from "@mui/system"
import { ChevronRight } from "lucide-react"

const CTAContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(23, 31, 77, 0.3)",
  position: "relative",
  overflow: "hidden",
}))

const GlowEffect = styled(Box)({
  position: "absolute",
  width: "40vw",
  height: "40vw",
  borderRadius: "50%",
  filter: "blur(150px)",
  opacity: 0.15,
  zIndex: 0,
})

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#000",
  padding: "12px 28px",
  fontSize: "1.1rem",
  "&:hover": {
    backgroundColor: "#d6a00e",
  },
}))

// Hook for scroll animation
const useScrollAnimation = () => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      const elements = currentRef.querySelectorAll(".fade-in")
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (currentRef) {
        const elements = currentRef.querySelectorAll(".fade-in")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [])

  return ref
}

export default function ContactCTA() {
  const ctaRef = useScrollAnimation()

  return (
    <CTAContainer id="contact" ref={ctaRef}>
      {/* Background elements */}
      <GlowEffect
        sx={{
          top: "-20%",
          left: "60%",
          backgroundColor: "#ffba07",
        }}
      />
      <GlowEffect
        sx={{
          bottom: "-10%",
          left: "20%",
          backgroundColor: "#171f4d",
        }}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={7} className="fade-in">
            <Typography variant="h3" component="h2" fontWeight={700} gutterBottom>
              Ready to Transform Your Digital Presence?
            </Typography>
            <Typography color="text.secondary" sx={{ maxWidth: 600, fontSize: "1.1rem", mb: 4 }}>
              Let's discuss how our premium software development services can help your business achieve its goals and
              stand out in the digital landscape.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} className="fade-in" sx={{ textAlign: { xs: "left", md: "right" } }}>
            <CTAButton variant="contained" endIcon={<ChevronRight />}>
              Get in Touch
            </CTAButton>
          </Grid>
        </Grid>
      </Container>
    </CTAContainer>
  )
}
