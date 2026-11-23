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
  DESCRIPTION: "Customer support, account management and trading support roles across crypto exchanges, fintech SaaS and e-commerce — 2015 to today.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Notes on crypto customer support, on-chain tooling and running local AI — written for the people building and staffing support teams.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Hands-on crypto infrastructure: GPU mining farm, airdrop operations, validator nodes and the tooling behind this site.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search every article and project on this site by keyword — support, crypto, automation, infrastructure."
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

