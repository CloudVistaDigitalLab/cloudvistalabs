"use client"

import { useRef, useEffect } from "react"
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent, Chip, IconButton } from "@mui/material"
import { styled } from "@mui/system"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"

const ProjectsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  position: "relative",
  overflow: "hidden",
}))

const ProjectCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "rgba(15, 15, 15, 0.6)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.05)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 30px rgba(0, 0, 0, 0.3)",
    "& .project-image": {
      transform: "scale(1.05)",
    },
    "& .overlay": {
      opacity: 0.85,
    },
  },
}))

const ProjectImage = styled(CardMedia)(({ theme }) => ({
  height: 0,
  paddingTop: "56.25%", // 16:9 aspect ratio
  backgroundColor: "rgba(23, 31, 77, 0.3)",
  position: "relative",
  transition: "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
}))

const ProjectOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
}))

const TechChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: "rgba(23, 31, 77, 0.8)",
  color: theme.palette.text.primary,
  "& .MuiChip-label": {
    fontWeight: 500,
  },
}))

const LinkButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  color: "#000",
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

export default function Projects() {
  const projectsRef = useScrollAnimation()

  const projects = [
    {
      title: "Space Explorer",
      description:
        "A Website that implemented using NASA API, allowing users to explore space images and videos, with a user-friendly interface and advanced search functionality.",
      image: "/space-explorer.png",
      tech: ["React", "Node.js", "Firebase", "MUI"],
      liveLink: "https://space-explorer-nine.vercel.app/",
      repoLink: "#",
    },
    {
      title: "PawSome Pals",
      description:
        "Mobile application for pet adoption and care, featuring user profiles,marketplace for pet related products, and a community forum for pet lovers.",
      image: "/pawsome-pals.png?height=400&width=600",
      tech: ["Native Android", "Kotlin", "Firestore", "Firebase"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Employee Management System",
      description:
        "Web application for managing employee records, attendance, and leaves, with a responsive design and real-time data updates.",
      image: "/emp-management.png?height=400&width=600",
      tech: ["React", "Node.js", "Express", "MongoDB", "MUI"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      title: "Insurence Management System",
      description:
        "A web application for managing insurance policies, claims, and customer data, with a focus on security and data integrity.",
      image: "/insurence-app.png?height=400&width=600",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      liveLink: "#",
      repoLink: "#",
    },
  ]

  return (
    <ProjectsContainer id="projects" ref={projectsRef}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Box textAlign="center" className="fade-in" sx={{ mb: 8 }}>
          <Typography color="primary" fontWeight={600} gutterBottom>
            OUR PROJECTS
          </Typography>
          <Typography variant="h3" component="h2" fontWeight={700} gutterBottom>
            Featured Work
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 800, mx: "auto", fontSize: "1.1rem" }}>
            Explore our portfolio of successful projects delivered to clients across various industries, demonstrating
            our technical expertise and problem-solving capabilities.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={12} sx={{width:'100%'}} key={index}>
              <ProjectCard className="fade-in" sx={{ transitionDelay: `${index * 100}ms` }}>
                <ProjectImage className="project-image" image={project.image} title={project.title} />
                <ProjectOverlay className="overlay">
                  <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                    <LinkButton
                      aria-label="Live Demo"
                      size="small"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </LinkButton>
                    <LinkButton
                      aria-label="GitHub Repository"
                      size="small"
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHub size={18} />
                    </LinkButton>
                  </Box>
                </ProjectOverlay>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" component="h3" fontWeight={600} gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", mt: 2 }}>
                    {project.tech.map((tech, i) => (
                      <TechChip key={i} label={tech} size="small" />
                    ))}
                  </Box>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectsContainer>
  )
}
