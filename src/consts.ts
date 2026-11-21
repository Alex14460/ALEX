import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Alexandre Roussel",
  DESCRIPTION: "Customer Support & Account Management — SaaS, Fintech, Crypto. Bilingue FR/EN.",
  AUTHOR: "Alexandre Roussel",
  LOCATION: "Las Palmas, Gran Canaria",
  LANGUAGES: ["fr", "en"],
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
  {
    TEXT: "About",
    HREF: "/about",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "contact@alexandreroussel.com",
    HREF: "mailto:contact@alexandreroussel.com",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Alexandre Roussel",
    HREF: "https://www.linkedin.com/in/roussel-alexandre/",
  },
  {
    NAME: "GitHub",
    ICON: "github",
    TEXT: "@Alex14460",
    HREF: "https://github.com/Alex14460",
  },
]

