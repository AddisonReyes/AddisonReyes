---
name: Addison Reyes Portfolio
version: 0.1.0
status: alpha
colors:
  bg:
    base: "#121212"
    elevated: "#171717"
    soft: "rgba(255,255,255,0.05)"
    softer: "rgba(255,255,255,0.02)"
  text:
    primary: "#ffffff"
    secondary: "rgba(255,255,255,0.90)"
    muted: "rgba(255,255,255,0.80)"
    subtle: "rgba(255,255,255,0.65)"
    faint: "rgba(255,255,255,0.40)"
  border:
    subtle: "rgba(255,255,255,0.10)"
    faint: "rgba(255,255,255,0.05)"
    accent: "rgba(217,70,239,0.25)"
  brand:
    primary: "#c026d3"
    primary-hover: "#a21caf"
    primary-strong: "#86198f"
    accent: "#e879f9"
    accent-soft: "rgba(217,70,239,0.12)"
    accent-glow: "rgba(217,70,239,0.10)"
  feedback:
    error: "#f87171"
typography:
  display:
    fontFamily: 'Georgia, "Times New Roman", Times, serif'
    fontWeight: 700
    lineHeight: 1.15
  heading:
    fontFamily: 'Georgia, "Times New Roman", Times, serif'
    fontWeight: 400
    lineHeight: 1.2
  body:
    fontFamily: 'Georgia, "Times New Roman", Times, serif'
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: 'Georgia, "Times New Roman", Times, serif'
    fontWeight: 700
    letterSpacing: 0.12em
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  "2xl": "3rem"
  "3xl": "5rem"
radius:
  sm: "0.5rem"
  md: "0.75rem"
  lg: "1rem"
  xl: "1.5rem"
effects:
  focusRing: "0 0 0 2px rgba(217,70,239,0.85)"
  cardShadow: "0 12px 28px rgba(0,0,0,0.1)"
  gridOverlay: "72px grid with very low-contrast white lines"
  backgroundGlow:
    - "radial glow at top-left using brand accent"
    - "radial glow at bottom-right using desaturated light gray"
motion:
  reveal:
    duration: "600ms"
    easing: "ease"
    offsetY: "16px"
  ambient:
    duration: "90s"
    easing: "linear"
---

# Design System

## Overview

This portfolio uses a restrained, editorial dark theme with a subtle premium feel. It should read as calm, capable, and product-minded rather than flashy, playful, or startup-generic.

The design language is built around a near-black canvas, serif typography throughout, soft translucent surfaces, and a fuchsia accent that is used intentionally for emphasis. Future UI should feel like a natural extension of the current one-screen portfolio, not a redesign.

## Colors

- **Base background** uses `{colors.bg.base}` as the primary canvas.
- **Elevated dark surfaces** use `{colors.bg.elevated}` for nav bars, footers, and high-contrast containers.
- **Primary text** uses `{colors.text.primary}`.
- **Secondary body text** uses `{colors.text.secondary}` or `{colors.text.muted}` for long-form copy.
- **Muted supporting text** uses `{colors.text.subtle}` or `{colors.text.faint}` for captions, labels, and helper content.
- **Brand primary** is `{colors.brand.primary}` and should drive the main call to action.
- **Brand accent** is `{colors.brand.accent}` and is best for section kickers, inline links, status dots, and selective highlights.
- **Borders** should stay translucent and understated, usually `{colors.border.subtle}` or `{colors.border.faint}`.
- **Error feedback** uses `{colors.feedback.error}`.

## Typography

- Use the same serif stack everywhere: `{typography.body.fontFamily}`.
- Main hero name should feel stately and confident: bold serif, tight but not cramped line height.
- Section titles should be elegant and simple, never ultra-heavy sans headings.
- Body copy should remain readable and spacious, with line-height around `{typography.body.lineHeight}`.
- Small UI labels and nav items should be uppercase with generous tracking to create a quiet editorial rhythm.
- Avoid mixing in default product sans fonts unless a future redesign explicitly calls for it.

## Layout

- Keep layout centered with generous horizontal breathing room and strong vertical rhythm.
- Prefer content widths around `max-w-4xl`, `max-w-5xl`, or `max-w-6xl` depending on section density.
- Major sections should feel separated by long spacing and faint top borders rather than heavy boxed segmentation.
- Preserve the anchored single-page flow: hero, about, selected work, contact.
- Mobile layouts should collapse cleanly to one column without losing the sense of polish or breathing room.

## Background And Atmosphere

- The page background is not flat black. It combines a near-black base, soft radial accent glows, a faint linear wash, and a low-opacity grid overlay.
- The grid texture must remain subtle and atmospheric, never dominant or high-contrast.
- Background effects should support depth and craft, not distract from content.
- If adding new sections, maintain the same ambient environment instead of inventing new unrelated textures.

## Components

### Navigation

- Fixed top navigation on desktop with a blurred dark surface and faint bottom border.
- Links are uppercase, tracked out, and low-opacity until hover or active state.
- Mobile nav should feel lightweight and tidy, using the same dark surface and minimal transitions.

### Buttons And Action Links

- Primary CTA: filled brand background `{colors.brand.primary}`, white text, pill shape, hover darkens to `{colors.brand.primary-hover}`.
- Secondary CTA: transparent or near-transparent fill, subtle white border, white text, hover through soft background tint rather than heavy fill.
- Icon and text should align horizontally with small gaps and centered balance.

### Section Kickers

- Small uppercase eyebrow text in `{colors.brand.accent}` with wide tracking.
- Use before major section titles only; do not overuse inside dense content.

### Project Cards

- Featured project previews should feel airy, polished, and product-centric.
- Images live inside rounded containers with faint borders, very soft shadow, and subtle hover scale.
- Supporting metadata can use muted text and small uppercase accents, but the main headline should remain the focal point.

### Contact Links

- Contact rows use circular icon containers with faint borders.
- Email may use the accent color directly; secondary social links should stay white until hover.

### Form Controls

- Inputs and textarea use translucent dark fills, faint borders, white text, and accent-colored focus states.
- Corners should be gently rounded, not sharp and not excessively pill-shaped.
- Labels remain uppercase, tracked, and quiet in contrast.

### Toast / Feedback

- Toasts should float above the interface on a blurred dark panel with a small colored status dot.
- Success should lean on the accent family; error should switch to red while keeping the same shell.

## Motion

- Motion should be sparse and confident.
- Reveal animations use a short upward fade and should only happen once per element.
- Ambient background drift can be very slow and nearly imperceptible.
- Respect `prefers-reduced-motion`; when reduced motion is requested, remove non-essential movement and keep state changes immediate.

## Do's And Don'ts

- DO preserve the dark editorial-serif identity of the current site.
- DO use fuchsia as a deliberate accent, not as a blanket color for every interactive element.
- DO keep borders, shadows, and fills subtle.
- DO favor calm polish over novelty.
- DO maintain strong readability and WCAG-conscious contrast on dark surfaces.
- DON'T switch the interface to a generic sans-heavy SaaS aesthetic.
- DON'T introduce bright rainbow gradients, glassmorphism overload, or neon cyberpunk treatments.
- DON'T use pure flat black with no texture; the atmosphere matters.
- DON'T mix too many corner radii in the same viewport.
- DON'T make cards, forms, or nav bars visually heavier than the content itself.

## Repo-Specific Guidance

d-motion`; when reduced motion is requested, remove non-essential movement and keep state changes immediate.

## Do's And Don'ts

- DO preserve the dark editorial-serif identity of the current site.
- DO use fuchsia as a deliberate accent, not as a blanket color for every interactive element.
- DO keep borders, shadows, and fills subtle.
- DO favor calm polish over novelty.
- DO maintain strong readability and WCAG-conscious contrast on dark surfaces.
- DON'T switch the interface to a generic sans-heavy SaaS aesthetic.
- DON'T introduce bright rainbow gradients, glassmorphism overload, or neon cyberpunk treatments.
- DON'T use pure flat black with no texture; the atmosphere matters.
- DON'T mix too many corner radii in the same viewport.
- DON'T make cards, forms, or nav bars visually heavier than the content itself.

## Repo-Specific Guidance

- This repo is a static GitHub Pages site served from the root with no build step.
- The current implementation uses Tailwind via CDN plus handwritten CSS, so design decisions should translate cleanly to utility classes and plain CSS.
- When extending the UI, prefer reusing the existing visual primitives already present in `index.html` and `style.css` instead of inventing a parallel component language.
- If a future agent adds new pages or sections, they should still look like they belong to this portfolio first and foremost.
