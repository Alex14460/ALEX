export type Lang = "en" | "fr"

export const DEFAULT_LANG: Lang = "en"

/** Paths that exist in both languages (EN canonical form). */
const BILINGUAL = ["/", "/work", "/about", "/contact", "/blog"]

export function langFromPathname(pathname: string): Lang {
  return pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "en"
}

export function otherLang(lang: Lang): Lang {
  return lang === "fr" ? "en" : "fr"
}

function normalize(pathname: string): string {
  return pathname.replace(/\/+$/, "") || "/"
}

export function enPath(pathname: string): string {
  const p = normalize(pathname)
  return p.startsWith("/fr") ? p.slice(3) || "/" : p
}

/** Href of the same page in the other language (falls back to that language's home). */
export function counterpartPath(pathname: string, to: Lang): string {
  const p = normalize(pathname)
  if (to === "fr") return p === "/" ? "/fr" : "/fr" + p
  return enPath(p)
}

/** hreflang entries for BaseHead; undefined when the page is not bilingual. */
export function alternatesFor(pathname: string, site: string) {
  const canonical = enPath(pathname)
  const bilingual = BILINGUAL.includes(canonical) || canonical.startsWith("/blog/")
  if (!bilingual) return undefined
  const enHref = new URL(canonical, site).toString()
  const frHref = new URL(canonical === "/" ? "/fr" : "/fr" + canonical, site).toString()
  return [
    { hreflang: "fr", href: frHref },
    { hreflang: "en", href: enHref },
    { hreflang: "x-default", href: enHref },
  ]
}
