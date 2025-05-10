"use client"

import { useState, useEffect } from "react"
import { styled } from "@mui/system"
import { useTheme } from "@mui/material/styles"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"

// Custom cursor with particles
const CustomCursor = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 9999,
  pointerEvents: "none",
  mixBlendMode: "difference",
  transition: "transform 0.1s ease",
})

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const theme = useTheme()

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
  }

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    document.addEventListener("mousemove", updateCursorPosition)
    document.addEventListener("mouseover", handleMouseOver)

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  return (
    <CustomCursor
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 1,
          },
          fpsLimit: 120,
          particles: {
            number: {
              value: isHovering ? 8 : 5,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffba07",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.8,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: isHovering ? 4 : 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
            line_linked: {
              enable: isHovering,
              distance: 150,
              color: "#ffba07",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          background: {
            color: "transparent",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          width: isHovering ? "100px" : "50px",
          height: isHovering ? "100px" : "50px",
          transform: "translate(-50%, -50%)",
        }}
      />
    </CustomCursor>
  )
}
