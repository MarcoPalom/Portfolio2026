export interface StackItem {
  id: string;
  name: string;
  category: string;
  spec: string;
  desc: string;
  accentColor: string;
  hoverBorder: string;
  glowBg: string;
  crosshairBorder: string;
}

export const ECOSYSTEM_STACK: StackItem[] = [
  {
    id: "01",
    name: "React.js",
    category: "LIBRARY",
    spec: "V18+ / COMPONENT CORE",
    desc: "Declarative component architecture, custom hooks, fiber reconciliation, concurrent features, and state optimization.",
    accentColor: "text-[#00d8ff]",
    hoverBorder: "hover:border-[#00d8ff]/30 hover:shadow-[0_0_25px_rgba(0,216,255,0.06)]",
    glowBg: "bg-[#00d8ff]/10",
    crosshairBorder: "border-[#00d8ff]/40"
  },
  {
    id: "02",
    name: "Next.js",
    category: "FRAMEWORK",
    spec: "APP ROUTER / HYBRID",
    desc: "Static site generation, server-side rendering, dynamic routing, edge runtime optimization, and api routes integration.",
    accentColor: "text-white",
    hoverBorder: "hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.06)]",
    glowBg: "bg-white/10",
    crosshairBorder: "border-white/40"
  },
  {
    id: "03",
    name: "Nuxt.js",
    category: "FRAMEWORK",
    spec: "VUX / MOUNTAIN ROUTER",
    desc: "Vue-based layout systems, auto-imported modules, universal server-side rendering, and integrated static generation engines.",
    accentColor: "text-[#00c58e]",
    hoverBorder: "hover:border-[#00c58e]/30 hover:shadow-[0_0_25px_rgba(0,197,142,0.06)]",
    glowBg: "bg-[#00c58e]/10",
    crosshairBorder: "border-[#00c58e]/40"
  },
  {
    id: "04",
    name: "TypeScript",
    category: "LANGUAGE",
    spec: "STRICT / STATIC TYPING",
    desc: "Interface definition compile safeguards, advanced generic structures, conditional compiler nodes, and code autocomplete tooling.",
    accentColor: "text-[#3178c6]",
    hoverBorder: "hover:border-[#3178c6]/30 hover:shadow-[0_0_25px_rgba(49,120,198,0.06)]",
    glowBg: "bg-[#3178c6]/10",
    crosshairBorder: "border-[#3178c6]/40"
  },
  {
    id: "05",
    name: "Tailwind CSS",
    category: "UTILITY CSS",
    spec: "AESTHETICS / COMPACT",
    desc: "Responsive layout tokens, component fluid utilities, customizable design engines, and rapid wireframe layout speed.",
    accentColor: "text-[#38bdf8]",
    hoverBorder: "hover:border-[#38bdf8]/30 hover:shadow-[0_0_25px_rgba(56,189,248,0.06)]",
    glowBg: "bg-[#38bdf8]/10",
    crosshairBorder: "border-[#38bdf8]/40"
  },
  {
    id: "06",
    name: "GSAP Motion",
    category: "ANIMATION",
    spec: "TIMELINE / SPLINES",
    desc: "Tween coordinate interpolation, advanced stagger triggers, scroll-driven triggers, and bezier path animations.",
    accentColor: "text-[#88ce02]",
    hoverBorder: "hover:border-[#88ce02]/30 hover:shadow-[0_0_25px_rgba(136,206,2,0.06)]",
    glowBg: "bg-[#88ce02]/10",
    crosshairBorder: "border-[#88ce02]/40"
  },
  {
    id: "07",
    name: "Figma Canvas",
    category: "UI DESIGN",
    spec: "VECTOR / DESIGN FLOW",
    desc: "Grid vector architecture, components, variables, micro-interaction mockups, design tokens, and developer asset delivery.",
    accentColor: "text-[#f24e1e]",
    hoverBorder: "hover:border-[#f24e1e]/30 hover:shadow-[0_0_25px_rgba(242,78,30,0.06)]",
    glowBg: "bg-[#f24e1e]/10",
    crosshairBorder: "border-[#f24e1e]/40"
  },
  {
    id: "08",
    name: "Illustrator",
    category: "VECTOR ART",
    spec: "ANCHOR / BEZIER PATH",
    desc: "Anchor node modification, complex geometric profiles, vector tracing, precise asset design, and raw SVG exports.",
    accentColor: "text-[#ff9a00]",
    hoverBorder: "hover:border-[#ff9a00]/30 hover:shadow-[0_0_25px_rgba(255,154,0,0.06)]",
    glowBg: "bg-[#ff9a00]/10",
    crosshairBorder: "border-[#ff9a00]/40"
  },
  {
    id: "09",
    name: "Photoshop",
    category: "PIXEL STACK",
    spec: "PIXEL GRID / MARQUEE",
    desc: "Raster graphic overlays, image assets correction, compositing workflows, channel filtering, and detailed mockups generation.",
    accentColor: "text-[#31a8ff]",
    hoverBorder: "hover:border-[#31a8ff]/30 hover:shadow-[0_0_25px_rgba(49,168,255,0.06)]",
    glowBg: "bg-[#31a8ff]/10",
    crosshairBorder: "border-[#31a8ff]/40"
  },
  {
    id: "10",
    name: "Node.js",
    category: "RUNTIME",
    spec: "V18+ / EVENT-DRIVEN",
    desc: "Asynchronous event-driven JavaScript engine, back-end configurations, custom script automation, and non-blocking package tooling.",
    accentColor: "text-[#6cc24a]",
    hoverBorder: "hover:border-[#6cc24a]/30 hover:shadow-[0_0_25px_rgba(108,194,74,0.06)]",
    glowBg: "bg-[#6cc24a]/10",
    crosshairBorder: "border-[#6cc24a]/40"
  }
];
