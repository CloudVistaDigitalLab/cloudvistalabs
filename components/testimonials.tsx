"use client"

import { useRef, useEffect, useState } from "react"
import { Box, Container, Typography, Avatar, Paper, IconButton } from "@mui/material"
import { styled } from "@mui/system"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const TestimonialsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#030303",
  position: "relative",
  overflow: "hidden",
}))

const TestimonialCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "rgba(15, 15, 15, 0.6)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  borderRadius: theme.shape.borderRadius,
  transition: "opacity 0.5s ease, transform 0.5s ease",
  maxWidth: 800,
  margin: "0 auto",
  position: "relative",
}))

const QuoteIcon = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: -20,
  left: 40,
  color: theme.palette.primary.main,
  opacity: 0.2,
  transform: "scale(2)",
}))

const ClientAvatar = styled(Avatar)(({ theme }) => ({
  width: 80,
  height: 80,
  marginBottom: theme.spacing(2),
  border: `3px solid ${theme.palette.primary.main}`,
}))

const ArrowButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(15, 15, 15, 0.8)",
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#000",
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

export default function Testimonials() {
  const testimonialsRef = useScrollAnimation()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials = [
    {
      quote:
        "CloudVista transformed our business with their exceptional software development skills. They delivered a complex e-commerce platform that exceeded our expectations and has significantly boosted our revenue.",
      name: "Alexandra Chen",
      role: "CEO, StyleHouse",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with CloudVista has been a game-changer for our healthcare practice. Their mobile application streamlined our operations and improved patient engagement. Their technical expertise and attention to detail are unmatched.",
      name: "Dr. Michael Torres",
      role: "Medical Director, HealthFirst",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The team at CloudVista created an AI-powered analytics dashboard that revolutionized how we process financial data. Their innovative approach and technical prowess delivered a solution that gives us a competitive edge.",
      name: "Sarah Williams",
      role: "CTO, FinancePro",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <TestimonialsContainer id="testimonials" ref={testimonialsRef}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" className="fade-in" sx={{ mb: 8 }}>
          <Typography color="primary" fontWeight={600} gutterBottom>
            TESTIMONIALS
          </Typography>
          <Typography variant="h3" component="h2" fontWeight={700} gutterBottom>
            What Our Clients Say
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 800, mx: "auto", fontSize: "1.1rem" }}>
            Our clients' success stories highlight our commitment to excellence and ability to deliver outstanding
            results.
          </Typography>
        </Box>

        <Box sx={{ position: "relative", my: 4 }} className="fade-in">
          <TestimonialCard
            sx={{
              opacity: isAnimating ? 0 : 1,
              transform: isAnimating ? "translateY(20px)" : "translateY(0)",
            }}
          >
            <QuoteIcon>
              <Quote size={40} />
            </QuoteIcon>
            <ClientAvatar src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
            <Typography variant="h6" fontWeight={600} gutterBottom>
              {testimonials[currentTestimonial].name}
            </Typography>
            <Typography variant="body2" color="primary" gutterBottom>
              {testimonials[currentTestimonial].role}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              sx={{ fontSize: "1.1rem", fontStyle: "italic", mt: 2 }}
            >
              "{testimonials[currentTestimonial].quote}"
            </Typography>
          </TestimonialCard>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
            <ArrowButton onClick={handlePrev}>
              <ChevronLeft />
            </ArrowButton>
            <ArrowButton onClick={handleNext}>
              <ChevronRight />
            </ArrowButton>
          </Box>
        </Box>
      </Container>
    </TestimonialsContainer>
  )
}
