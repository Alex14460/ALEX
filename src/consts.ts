import type { Site, Page, Links, Socials } from "@types"

// Contact — single source of truth.
// NOTE: contact@alexandreroussel.com is displayed nowhere because the domain has
// no MX record (mail to it bounces). Set EMAIL back to the branded address once
// Cloudflare Email Routing is enabled on alexandreroussel.com.
export const CONTACT = {
  EMAIL: "AlexandreR365@gmail.com",
  EMAIL_BRANDED: "contact@alexandreroussel.com",
  /** Cal.com / Calendly URL. Empty string => the booking block falls back to a mailto link. */
  BOOKING_URL: "",
  RESPONSE_TIME_EN: "I answer every message within 24 hours on business days.",
  RESPONSE_TIME_FR: "Je réponds à chaque message sous 24 h ouvrées.",
}

// Global
export const SITE: Site = {
  TITLE: "Alexandre Roussel",
  DESCRIPTION: "Customer Support & Account Management — SaaS, Fintech, Crypto. Bilingual FR/EN.",
  AUTHOR: "Alexandre Roussel",
  LOCATION: "Full remote (Europe) · Paris",
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
    HREF: "/fr/projects",
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
    TEXT: CONTACT.EMAIL,
    HREF: `mailto:${CONTACT.EMAIL}`,
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

