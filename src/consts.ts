import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Alexandre Roussel",
  DESCRIPTION: "Welcome to my page.",
  AUTHOR: "Alexandre Roussel",
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
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "alexandrer365@gmail.com",
    HREF: "mailto:alexandrer365@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "markhorn-dev",
    HREF: "https://github.com/markhorn-dev/astro-sphere"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Alexandre Roussel",
    HREF: "https://www.linkedin.com/in/roussel-alexandre/",
  },
]

