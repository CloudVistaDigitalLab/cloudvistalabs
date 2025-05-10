"use client"

import { useRef, useEffect } from "react"
import { Box, Container, Grid, Typography, Card, CardContent, CardActions, Button } from "@mui/material"
import { styled } from "@mui/system"
import { Code, Smartphone, Palette, ChevronRight, BrainCircuit } from "lucide-react"

const ServicesContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#030303",
  position: "relative",
  overflow: "hidden",
}))

const ServiceCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgba(15, 15, 15, 0.6)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.3)",
    "& .icon-wrapper": {
      backgroundColor: theme.palette.primary.main,
      color: "#000",
    },
  },
}))

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 70,
  height: 70,
  borderRadius: 15,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  backgroundColor: "rgba(23, 31, 77, 0.8)",
  color: theme.palette.primary.main,
  transition: "background-color 0.3s ease, color 0.3s ease",
}))

const LearnMoreButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: "rgba(255, 186, 7, 0.08)",
  },
}))

const GradientOverlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: "radial-gradient(circle at 50% 0%, rgba(23, 31, 77, 0.2) 0%, transparent 70%)",
  pointerEvents: "none",
})

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

export default function Services() {
  const servicesRef = useScrollAnimation()

  const services = [
    {
      icon: <Code size={32} />,
      title: "Web Development",
      description:
        "We build responsive, high-performance web applications using cutting-edge technologies like React, Node.js, and more.",
      technologies: "ReactJS, NodeJS, PHP",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      description:
        "Our team creates native and cross-platform mobile applications that deliver exceptional user experiences.",
      technologies: "React Native, Kotlin, Dart",
    },
    {
      icon: <BrainCircuit size={32} />,
      title: "Machine Learning Development",
      description:
        "Leverage the power of AI and ML to create intelligent applications that learn and adapt to your business needs.",
      technologies: "TensorFlow, PyTorch, Python",
    },
    {
      icon: <Palette size={32} />,
      title: "UI/UX Design",
      description:
        "We design intuitive, beautiful interfaces that engage users and enhance their experience with your software.",
      technologies: "Figma, Adobe XD, Prototyping",
    },
  ]

  return (
    <ServicesContainer id="services" ref={servicesRef}>
      <GradientOverlay />
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" className="fade-in" sx={{ mb: 8 }}>
          <Typography color="primary" fontWeight={600} gutterBottom>
            OUR SERVICES
          </Typography>
          <Typography variant="h3" component="h2" fontWeight={700} gutterBottom>
            Premium Solutions for Modern Challenges
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 800, mx: "auto", fontSize: "1.1rem" }}>
            We provide comprehensive software development services to help businesses thrive in the digital era,
            leveraging the latest technologies and methodologies.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{display:'flex', justifyContent:'space-between'}}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ 
                width: '48%', 
                '@media (max-width: 960px)': { 
                  width: '100%' 
                } 
              }}
            >
              <ServiceCard className="fade-in" sx={{ transitionDelay: `${index * 100}ms` }}>
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <IconWrapper className="icon-wrapper">{service.icon}</IconWrapper>
                  <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph sx={{ mb: 3 }}>
                    {service.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <Typography variant="subtitle2" fontWeight={600}>
                      Technologies:
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      {service.technologies}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions sx={{ px: 4, pb: 3 }}>
                  <LearnMoreButton endIcon={<ChevronRight size={16} />}>Learn More</LearnMoreButton>
                </CardActions>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ServicesContainer>
  )
}
