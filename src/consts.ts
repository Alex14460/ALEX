import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Alexandre Roussel",
  DESCRIPTION: "Customer Support & Account Management — SaaS, Fintech, Crypto. Bilingual FR/EN.",
  AUTHOR: "Alexandre Roussel",
  LOCATION: "Europe / Remote",
  LANGUAGES: ["FR (native)", "EN (fluent — TOEFL 105 / TOEIC 990)", "ES (conversational)"],
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
  {
    TEXT: "Contact",
    HREF: "/contact",
  },
]

export const FR_LINKS: Links = [
  {
    TEXT: "Expérience",
    HREF: "/fr/work",
  },
  {
    TEXT: "Projets",
    HREF: "/projects",
  },
  {
    TEXT: "Blog",
    HREF: "/fr/blog",
  },
  {
    TEXT: "À propos",
    HREF: "/fr/about",
  },
  {
    TEXT: "Contact",
    HREF: "/fr/contact",
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

