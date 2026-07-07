# Siddharth Dhuriya — Portfolio Site Brief

Single-page scrollytelling portfolio for a Senior PM candidate (marketplace, seller platform,
AI product domains). Audience: hiring managers, founders, product leaders. Implemented in this
repo — this document records the design intent behind the build.

---

## 1 · Site Architecture

One page, six acts. The 3D field persists behind everything and recedes as the story takes over.

| # | Section | Content | Scroll behavior |
|---|---------|---------|-----------------|
| — | **Hero** | Name, positioning statement, one-line summary, CTAs | Full-viewport. Headline lines mask-reveal on load; on scroll the text recedes upward and fades against the 3D field (depth illusion); constellation rotates and camera dollies forward with scroll progress |
| 01 | **About** | Reconciled professional summary + portrait + fact list | Portrait is sticky on desktop with a slow parallax drift inside its frame; copy blocks stagger-reveal |
| 02 | **Experience** | Justdial → Navia Life Care → Parity Cube (Desidime) → Infinity | Timeline rail draws itself (scrub-linked gradient line); each role's bullet cards cascade in from the left as the reader reaches them |
| 03 | **Craft** | Six competency cards + grouped tools panel | Staggered card reveals; hover lift + accent borders |
| 04 | **Projects** | Personal builds with Claude Code: JD Social listener (live link) + this portfolio itself | Wide cards with index chips, tag pills, and live-link CTA; stagger reveal |
| 05 | **Education** | ISB Hyderabad (2025), MATS University (2019) | Simple reveal; oversized italic year numerals as background texture |
| 06 | **Contact** | Availability statement, email + phone CTAs, footer | Centered finale; canvas glow settles to its dimmest state |

Persistent: fixed blur header (wordmark, anchors, "Say hello" CTA), film-grain overlay, fixed WebGL canvas.

## 2 · Visual & Interaction Design Spec

**Palette** — ink night `#07090F`, warm bone text `#E9E4D8`, muted slate `#9AA1B3`,
lantern amber `#F5A524` → coral `#FF8E3C` gradient (primary accent), signal teal `#35D0BA`
(secondary, "demand" signal). Palette is keyed to the Hoi An lantern photograph so the portrait
feels native to the theme.

**Typography** — Fraunces (variable, optical sizing) for display: literary, confident, italic
accents rendered in the amber gradient. Space Grotesk for body/UI: technical, contemporary.
Uppercase letter-spaced eyebrows number the sections like chapters.

**3D concept — "the marketplace constellation."** A field of ~850 glowing nodes in a flattened
ellipsoid: amber/coral nodes (sellers), teal nodes (demand), bone (platform). Nearest-neighbour
line segments form the connective tissue of a two-sided market. It breathes slowly, rotates with
scroll, and the camera pushes in as you descend — the metaphor: his work is finding structure in
a noisy market. Mouse adds parallax depth. It is scenery, not spectacle: opacity falls to ~0.2
once reading begins.

**Portrait treatment** — face untouched; theme integration done entirely with overlay gradients
(top/bottom fade into page ink + soft vignette) and a hairline border. Lantern colors in the
photo echo the accent palette.

**Micro-interactions** — pulsing availability dot; animated scroll hint (hidden on mobile);
bullet cards nudge right on hover; competency cards lift; chips warm on hover; buttons rise 2px
with amber glow.

## 3 · Content Blocks

All copy lives in `index.html` and is the canonical reconciled version: Sr. PM resume's framing
(richer role titles, seller-lifecycle narrative) merged with the AI-PM resume's detail where it
added substance. **All business metrics (revenue, percentages, impressions, user counts,
retention figures) removed** and restated qualitatively — e.g. "measurable annual revenue
uplift," "significant gains in engagement and app retention," "nine-figure user base."
Facts kept verbatim-safe: titles, companies, dates, tools, education, languages, the
Claude-Code-built social listener (jdsocial.duckdns.org), "profitable from the first month."

## 4 · Technical Build Plan

**Stack** — zero-build static site: semantic HTML + modern CSS + vanilla JS, Three.js `0.160`
via ES-module CDN import map, GSAP 3.12 + ScrollTrigger via CDN. (React/R3F was considered and
rejected: one page, no state, no build pipeline to maintain — a static bundle deploys anywhere,
including GitHub Pages / Netlify drag-and-drop.)

**Files**
- `index.html` — content + structure
- `css/style.css` — design system (custom properties), layout, responsive rules
- `js/scene.js` — WebGL constellation (points + line segments, additive blending, fog)
- `js/main.js` — GSAP choreography (hero entrance, reveals, timeline scrub, parallax)
- `assets/siddharth.jpg` — EXIF-corrected, resized to 1200px, ~480 KB

**Performance for the 3D + scroll combo**
- Device-pixel-ratio clamped (2 desktop / 1.5 mobile); node count 850 → 380 on mobile
- No per-frame geometry rebuilds for links; only a subset of points animates position
- Rendering pauses when the tab is hidden; canvas is `pointer-events: none`
- `prefers-reduced-motion`: single static frame, all GSAP animation skipped, content fully readable
- Fonts via Google Fonts with preconnect; single lazy-loaded image; no other assets

**Mobile responsiveness**
- Fluid type (`clamp()`) and spacing throughout; grids collapse via `auto-fit/minmax`
- Hero switches to top-aligned flow ≤760px; scroll hint removed; nav links hidden behind the
  persistent "Say hello" CTA; fact/tool tables collapse to single column
- Verified at 375×812 and desktop widths with no horizontal overflow

**Run locally** — any static server, e.g. `npx serve .` then open the printed URL.
