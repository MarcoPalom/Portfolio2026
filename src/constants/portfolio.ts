export interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  color: 'emerald' | 'purple' | 'orange';
  bigText: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'INKsports System',
    subtitle: 'Frontend System Showcase',
    description: 'In my first professional role, I co-developed this comprehensive system as a Frontend Developer in a team of two. The platform features a secure login process, role-based access control (RBAC), inventory management with full CRUD systems, and fully optimized responsiveness across all devices.',
    image: '/Screen1.webp',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Ant Design'],
    color: 'purple',
    bigText: 'SPORTS'
  },
  {
    id: 2,
    title: 'FICSM 2024',
    subtitle: 'Interactive Film Festival Portal',
    description: 'Working as a solo developer, I adapted and modernized a deprecated template for the International Film Festival en la Costa del Seno Mexicano. Leveraging a native stack of WordPress, HTML5, CSS3, and JavaScript, I aligned the portal with the festival’s aesthetic expectations for the 2024 season.',
    image: '/Screen2.jpeg',
    tags: ['WordPress', 'JavaScript', 'HTML5', 'CSS3'],
    color: 'purple',
    bigText: 'CINEMA'
  },
  {
    id: 3,
    title: 'ZokiPulse',
    subtitle: 'Fullstack Wellbeing System',
    description: 'As a Fullstack Developer in collaboration with DEVRA software company, I co-developed ZokiPulse, an emotional wellbeing management platform for schools and corporates. I built the landing page and integrated webhooks for user acquisition, and built system features including UUID role-based access, student/employee onboarding, CRUD modules, interactive data charts, questionnaires, key emotional metrics, and secure authentication verified via Resend email API.',
    image: '/Screen3.jpeg',
    tags: ['Nuxt.js', 'Vue.js', 'Webhooks', 'Resend API'],
    color: 'emerald',
    bigText: 'PULSE'
  },
  {
    id: 4,
    title: 'FICSM 2025',
    subtitle: 'Interactive Venue & Event Portal',
    description: 'Developed from scratch for the International Film Festival en la Costa del Seno Mexicano 2025, I built a custom venue and event management web portal using React, Next.js, and Tailwind CSS. The system enables users to easily discover local events near their location via search filters, location tags, and an interactive festival schedule.',
    image: '/Screen4.webp',
    tags: ['React', 'Next.js', 'Tailwind CSS'],
    color: 'purple',
    bigText: 'VENUE'
  },
  {
    id: 5,
    title: 'Doty Landing Page',
    subtitle: 'Premium Startup Showcase',
    description: 'Representing my most comprehensive design achievement, I developed a modern, high-impact landing page for Doty, a startup co-founded with a friend. Leveraging React, Next.js, and Tailwind CSS, I created sophisticated visuals in Adobe Illustrator and Photoshop, and built complex, fluid scroll-driven animations using GSAP to deliver an immersive product showcase.',
    image: '/Screen5.webp',
    tags: ['React', 'Next.js', 'GSAP', 'Tailwind CSS'],
    color: 'orange',
    bigText: 'DOTY'
  }
];

export const COLOR_THEMES = {
  emerald: {
    glowShadow: 'shadow-[0_0_40px_rgba(16,185,129,0.08)]',
    accentText: 'text-emerald-400',
    bgOrb: 'bg-emerald-500/10'
  },
  purple: {
    glowShadow: 'shadow-[0_0_40px_rgba(168,85,247,0.08)]',
    accentText: 'text-purple-400',
    bgOrb: 'bg-purple-500/10'
  },
  orange: {
    glowShadow: 'shadow-[0_0_40px_rgba(249,115,22,0.08)]',
    accentText: 'text-orange-400',
    bgOrb: 'bg-orange-500/10'
  }
};
