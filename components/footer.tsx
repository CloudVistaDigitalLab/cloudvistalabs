"use client"

import { Box, Container, Grid, Typography, TextField, Button, Stack, IconButton, Divider } from "@mui/material"
import { styled } from "@mui/system"
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, GitlabIcon as GitHub, Send } from "lucide-react"

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#050505",
  position: "relative",
  overflow: "hidden",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(4),
  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
}))

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.25rem",
  fontWeight: 600,
  marginBottom: theme.spacing(3),
  position: "relative",
  paddingBottom: theme.spacing(1),
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 40,
    height: 3,
    backgroundColor: theme.palette.primary.main,
  },
}))

const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(2),
  alignItems: "flex-start",
}))

const IconBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginRight: theme.spacing(2),
  marginTop: "2px",
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(255, 255, 255, 0.2)",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
}))

const SubscribeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#000",
  height: "100%",
  minWidth: "auto",
  "&:hover": {
    backgroundColor: "#d6a00e",
  },
}))

const SocialButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  color: theme.palette.text.primary,
  marginRight: theme.spacing(1),
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: "#000",
  },
}))

export default function Footer() {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: { xs: "flex", md: "flex" }, alignItems: "center", gap: 0, mb: 2 }}>
              <img src="/logo.png" style={{height:'50px'}}/>
              <Typography variant="h6" component="div" sx={{ fontWeight: 700, fontSize: "1.8rem", mb: 0 }}>
                Digital<span style={{ color: "#ffba07" }}>Labs</span>
              </Typography>
            </Box>
            <Typography color="text.secondary" paragraph sx={{ mb: 4 }}>
              Premium software development solutions that transform businesses through innovation, precision, and
              uncompromising quality.
            </Typography>
            <Stack direction="row" spacing={1}>
              <SocialButton aria-label="Facebook">
                <Facebook size={18} />
              </SocialButton>
              <SocialButton aria-label="Twitter">
                <Twitter size={18} />
              </SocialButton>
              <SocialButton aria-label="LinkedIn">
                <Linkedin size={18} />
              </SocialButton>
              <SocialButton aria-label="Instagram">
                <Instagram size={18} />
              </SocialButton>
              <SocialButton aria-label="GitHub">
                <GitHub size={18} />
              </SocialButton>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FooterHeading>Contact Us</FooterHeading>
            <ContactItem>
              <IconBox>
                <MapPin size={18} />
              </IconBox>
              <Box>
                <Typography variant="body2">123 Innovation Drive</Typography>
                <Typography variant="body2" color="text.secondary">
                  Tech City, TC 90210
                </Typography>
              </Box>
            </ContactItem>
            <ContactItem>
              <IconBox>
                <Phone size={18} />
              </IconBox>
              <Box>
                <Typography variant="body2">+1 (555) 123-4567</Typography>
                <Typography variant="body2" color="text.secondary">
                  Mon-Fri, 9AM-6PM
                </Typography>
              </Box>
            </ContactItem>
            <ContactItem>
              <IconBox>
                <Mail size={18} />
              </IconBox>
              <Box>
                <Typography variant="body2">info@cloudvista.com</Typography>
                <Typography variant="body2" color="text.secondary">
                  Support: support@cloudvista.com
                </Typography>
              </Box>
            </ContactItem>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FooterHeading>Newsletter</FooterHeading>
            <Typography color="text.secondary" paragraph>
              Subscribe to our newsletter to receive updates on our latest projects and tech insights.
            </Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
              <StyledTextField variant="outlined" placeholder="Your Email" fullWidth size="small" sx={{ mr: 1 }} />
              <SubscribeButton variant="contained">
                <Send size={18} />
              </SubscribeButton>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Technologies We Work With:
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {["React", "Node.js", "MongoDB", "Firebase", "AWS", "React Native", "PHP", "Java"].map(
                  (tech, index) => (
                    <Typography
                      key={index}
                      variant="caption"
                      color="text.secondary"
                      sx={{
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: 1,
                        px: 1,
                        py: 0.5,
                      }}
                    >
                      {tech}
                    </Typography>
                  ),
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
        

        <Divider sx={{ my: 4, opacity: 0.1 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} CloudVista. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 3, mt: { xs: 2, sm: 0 } }}>
            <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "primary.main" } }}>
              Privacy Policy
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "primary.main" } }}>
              Terms of Service
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ "&:hover": { color: "primary.main" } }}>
              Cookie Policy
            </Typography>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  )
}
