"use client"

import { useEffect, useRef } from "react"
import { Box, Container, Grid, Typography, Divider } from "@mui/material"
import { styled } from "@mui/system"
import { Code, Rocket, Heart, Award } from "lucide-react"

const AboutContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: "relative",
  overflow: "hidden",
}))

const ValueCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgba(17, 17, 17, 0.6)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  height: "100%",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 186, 7, 0.2)",
  },
}))

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  backgroundColor: "rgba(23, 31, 77, 0.8)",
  color: theme.palette.primary.main,
}))

const StatBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
}))

const Background = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.06,
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
})

// Create a custom hook for scroll animation
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

export default function AboutUs() {
  const aboutRef = useScrollAnimation()

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Completed Projects" },
    { value: "50+", label: "Happy Clients" },
    { value: "15+", label: "Team Members" },
  ]

  const values = [
    {
      icon: <Code size={30} />,
      title: "Technical Excellence",
      description:
        "We maintain the highest standards of code quality and technical innovation, ensuring our solutions are robust, scalable, and future-proof.",
    },
    {
      icon: <Rocket size={30} />,
      title: "Innovation First",
      description:
        "We push boundaries to create software that not only meets but exceeds expectations, embracing cutting-edge technologies and methodologies.",
    },
    {
      icon: <Heart size={30} />,
      title: "Client-Centered",
      description:
        "We prioritize our clients' vision and needs, fostering collaborative partnerships that result in solutions perfectly aligned with their goals.",
    },
    {
      icon: <Award size={30} />,
      title: "Committed to Quality",
      description:
        "Quality is non-negotiable. Our rigorous processes and attention to detail ensure we deliver exceptional products that stand the test of time.",
    },
  ]

  return (
    <AboutContainer id="about" ref={aboutRef}>
      <Background />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <Box className="fade-in">
              <Typography color="primary" fontWeight={600} gutterBottom>
                ABOUT US
              </Typography>
              <Typography variant="h3" component="h2" gutterBottom fontWeight={700}>
                Premium Software Development Company
              </Typography>
              <Typography color="text.secondary" paragraph sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.7 }}>
                CloudVista is a premium software development agency dedicated to crafting exceptional digital
                experiences. Founded by a team of passionate technologists, we've grown into a powerhouse of innovation.
              </Typography>
              <Typography paragraph sx={{ mb: 4, fontSize: "1.1rem", lineHeight: 1.7 }}>
                We specialize in creating sophisticated, high-performance software solutions across web, mobile, and
                emerging technologies. Our team combines technical prowess with creative thinking to solve complex
                challenges and deliver results that exceed expectations.
              </Typography>
              <Typography color="text.secondary" paragraph sx={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
                What sets us apart is our unwavering commitment to quality, innovation, and client satisfaction. We
                don't just build software; we build partnerships that drive success.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              {stats.map((stat, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <StatBox className="fade-in" sx={{ transitionDelay: `${index * 100}ms` }}>
                    <Typography variant="h3" color="primary" fontWeight={700} gutterBottom>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </StatBox>
                </Grid>
              ))}
            </Grid>

            <Divider sx={{ my: 4, opacity: 0.1 }} />

            <Typography variant="h4" component="h3" gutterBottom className="fade-in" fontWeight={600}>
              Our Core Values
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              {values.map((value, index) => (
                <Grid item xs={12} sm={6} key={index} sx={{ width:"100%" }}>
                  <ValueCard className="fade-in" sx={{ transitionDelay: `${index * 100}ms` }}>
                    <IconWrapper>{value.icon}</IconWrapper>
                    <Typography variant="h6" fontWeight={600} gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </ValueCard>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AboutContainer>
  )
}
