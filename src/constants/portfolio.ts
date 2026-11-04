export interface Product {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  color: 'cyan' | 'rose' | 'emerald' | 'orange' | 'amber';
  bigText: string;
  url?: string; // live site, when it is public
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'INKsports System',
    subtitle: 'Frontend System Showcase',
    description: 'In my first professional role, I co-developed this comprehensive system as a Frontend Developer in a team of two. The platform features a secure login process, role-based access control (RBAC), inventory management with full CRUD systems, and fully optimized responsiveness across all devices.',
    image: '/Screen1.webp',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Ant Design'],
    color: 'cyan',
    bigText: 'SPORTS'
  },
  {
    id: 2,
    title: 'FICSM 2024',
    subtitle: 'Interactive Film Festival Portal',
    description: 'Working as a solo developer, I adapted and modernized a deprecated template for the International Film Festival en la Costa del Seno Mexicano. Leveraging a native stack of WordPress, HTML5, CSS3, and JavaScript, I aligned the portal with the festival’s aesthetic expectations for the 2024 season.',
    image: '/Screen2.jpeg',
    tags: ['WordPress', 'JavaScript', 'HTML5', 'CSS3'],
    color: 'rose',
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
    color: 'rose',
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
  },
  {
    id: 6,
    title: 'FICSM 2026',
    subtitle: 'Festival Platform in Production',
    description: 'As the sole developer for the Instituto Tamaulipeco para la Cultura y las Artes, I built and shipped the official site for the 33rd edition of the festival: a lineup of national and international companies with video clips and bios, a searchable map of 43 municipalities with day-by-day agendas, and one-tap "add to calendar". I also run its deployment on a VPS with PM2 and Nginx.',
    image: '/Screen6.webp',
    tags: ['Next.js', 'React', 'GSAP', 'Tailwind CSS'],
    color: 'amber',
    bigText: 'FESTIVAL',
    url: 'https://itcadigital.mx/festival'
  }
];

// One accent per project, taken from the colour world of the project itself
export const COLOR_THEMES = {
  cyan: { accentText: 'text-cyan-300' },
  rose: { accentText: 'text-rose-300' },
  emerald: { accentText: 'text-emerald-300' },
  orange: { accentText: 'text-orange-300' },
  amber: { accentText: 'text-amber-300' },
};
