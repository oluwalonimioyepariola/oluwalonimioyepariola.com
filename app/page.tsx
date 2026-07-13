import CommandPalette from "./components/CommandPalette";

const socials = [
  { label: "Email", href: "mailto:oluwalonimioyepariola@gmail.com" },
  { label: "GitHub", href: "https://github.com/oluwalonimioyepariola/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oluwalonimi-oyepariola-115343273/",
  },
  { label: "X", href: "https://x.com/oluwalonimi_oye" },
];

const socialIcons: Record<string, React.ReactNode> = {
  Email: (
    <>
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M3 7l9 6l9 -6" />
    </>
  ),
  GitHub: (
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  ),
  LinkedIn: (
    <>
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    </>
  ),
  X: (
    <>
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </>
  ),
};

const experience = [
  {
    period: "2024 - Feb 2026",
    role: "Full-Stack Engineer",
    company: "Lony",
    link: "https://lony.com.ng/",
    description:
      "Built a student marketplace platform with separate seller and buyer applications on a shared backend. Implemented payment processing with Stripe and Flutterwave, real-time chat with Socket.io, and caching with Redis. Structured the codebase as an Nx monorepo across multiple services, and debugged production issues end to end, from missing Prisma relations on the seller dashboard to silent product filtering bugs.",
    tags: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Redis",
      "Socket.io",
      "Stripe",
      "Nx",
      "Docker"
    ],
  },
  {
    period: "2023 - 2024",
    role: "Software Developer",
    company: "Rotimi Idowu & Company",
    link: "https://www.rotimiidowuandcompany.com.ng/",
    description:
      "Designed and shipped a property listings platform for a Lagos-based firm. Built a listing status system with conditional options per listing type, a search form wired to filtered results, and file uploads. Handled DNS configuration and Google Search Console verification for the production domain.",
    tags: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Server Actions",
      "SEO",
    ],
  },
  {
    period: "2023",
    role: "Web Developer",
    company: "Mone Realty",
    link: "https://www.monerealty.homes/",
    description:
      "Developed and deployed a property marketing site with listing pages, enquiry flows and a responsive layout, delivered end to end from design to production.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "MongoDB", "NextAuth"],
  },
];

const projects = [
  {
    name: "Olai",
    status: "In progress",
    description:
      "AI sales chatbot SaaS. Businesses train a chatbot on their own content, embed it on their site to qualify leads and book appointments, with real-time handoff to a live agent. Next.js 15 with Prisma and PostgreSQL (pgvector) for retrieval-augmented responses, streamed OpenAI output, Pusher for live chat, Stripe for billing and Docker for local development.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Docker", "Stripe"],
  },
];

// icon: slug on cdn.simpleicons.org; omit for plain text pills
const skills: {
  category: string;
  items: { name: string; icon?: string }[];
}[] = [
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", icon: "javascript" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Java", icon: "openjdk" },
      ],
    },
    {
      category: "Frontend Development",
      items: [
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextdotjs" },
        { name: "Vite", icon: "vite" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
      ],
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Express", icon: "express" },
        { name: "Spring Boot", icon: "springboot" },
        { name: "REST APIs" },
        { name: "Microservices" },
        { name: "Server Actions" },
        { name: "JWT", icon: "jsonwebtokens" },
        { name: "Socket.io", icon: "socketdotio" },
        { name: "Stripe", icon: "stripe" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "SQL" },
        { name: "NoSQL" },
        { name: "MySQL", icon: "mysql" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Redis", icon: "redis" },
        { name: "Prisma", icon: "prisma" },
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS" },
        { name: "Docker", icon: "docker" },
        { name: "CI/CD" },
        { name: "GitHub Actions", icon: "githubactions" },
        { name: "Vercel", icon: "vercel" },
        { name: "Nx", icon: "nx" },
      ],
    },
    {
      category: "Version Control & Collaboration",
      items: [
        { name: "Git", icon: "git" },
        { name: "GitHub", icon: "github" },
        { name: "GitLab", icon: "gitlab" },
        { name: "Notion", icon: "notion" },

      ],
    },
    {
      category: "Testing",
      items: [{ name: "Jest", icon: "jest" }],
    },
    {
      category: "Software Development Methodologies",
      items: [
        { name: "Agile" },
        { name: "Scrum" },
        { name: "Kanban" },
        { name: "Lean" },
        { name: "Test-Driven Development (TDD)" },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        { name: "Problem-solving" },
        { name: "Team Leadership" },
        { name: "Effective Communication" },
        { name: "Adaptability" },
        { name: "Time Management" },
        { name: "Project Planning" },
        { name: "Conflict Resolution" },
      ],
    },
  ];

const education = [
  {
    period: "2026 - 2028",
    school: "University of East London",
    degree: "MSc Software Engineering",
    detail: "Modules: Cloud Computing (96%); Software Testing and Quality Assurance (91%).",
  },
  {
    period: "2022 - 2025",
    school: "Bowen University",
    degree: "BSc Computer Science",
    detail: "",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-line bg-tagbg px-2.5 py-0.5 text-xs text-soft">
      {children}
    </span>
  );
}

function SkillPill({ name, icon }: { name: string; icon?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-tagbg px-2.5 py-1 text-xs text-soft">
      {icon && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`/icons/${icon}.svg`}
          alt=""
          width={14}
          height={14}
          loading="lazy"
        />
      )}
      {name}
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-5 text-lg font-bold text-ink">{children}</h2>;
}

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        {/* Header */}
        <header>
          <h1 className="text-2xl font-bold text-ink">
            Oluwalonimi Oyepariola
          </h1>
          <p className="mt-1 text-soft">Software Engineer</p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-faint">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
              <path d="M3.6 9h16.8" />
              <path d="M3.6 15h16.8" />
              <path d="M11.5 3a17 17 0 0 0 0 18" />
              <path d="M12.5 3a17 17 0 0 1 0 18" />
            </svg>
            London, United Kingdom
          </p>
          <p className="mt-3 hidden text-xs text-soft print:block">
            oluwalonimioyepariola@gmail.com · github.com/oluwalonimioyepariola
            · linkedin.com/in/oluwalonimi-oyepariola-115343273
          </p>
          <nav aria-label="Social links" className="mt-4 flex gap-2 print:hidden">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                title={s.label}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="rounded-md border border-line p-1.5 text-soft transition-colors hover:bg-tagbg hover:text-ink"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {socialIcons[s.label]}
                </svg>
              </a>
            ))}
          </nav>
        </header>

        {/* About */}
        <section id="about" className="mt-14 scroll-mt-8" aria-label="About">
          <SectionTitle>About</SectionTitle>
          <div className="space-y-4 text-sm leading-relaxed text-soft">
            <p>
              I am a software engineer studying for an MSc in Software
              Engineering at the University of East London, with a BSc in
              Computer Science from Bowen University.
            </p>
            <p>
              I work across the stack: Node.js and PostgreSQL on the backend,
              React, Next.js and TypeScript on the frontend. I have shipped and
              maintained production applications for real clients, from a
              multi-service marketplace with payments and real-time chat to
              property platforms serving live traffic.
            </p>
            <p>
              I am currently looking for software engineering internship
              opportunities in the UK.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mt-14 scroll-mt-8"
          aria-label="Experience"
        >
          <SectionTitle>Experience</SectionTitle>
          <ol className="space-y-10">
            {experience.map((job) => (
              <li key={job.company}>
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-ink">
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                      >
                        {job.company}
                      </a>
                    </h3>
                    <p className="mt-0.5 text-sm text-soft">{job.role}</p>
                  </div>
                  <p className="shrink-0 text-xs text-faint">{job.period}</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-soft">
                  {job.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mt-14 scroll-mt-8"
          aria-label="Projects"
        >
          <SectionTitle>Projects</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-lg border border-line p-5"
              >
                <h3 className="text-sm font-semibold text-ink">
                  {p.name}{" "}
                  <span className="ml-1 rounded-full border border-line px-2 py-0.5 text-xs font-normal text-faint">
                    {p.status}
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soft">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-14 scroll-mt-8" aria-label="Skills">
          <SectionTitle>Skills</SectionTitle>
          <div className="space-y-5">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold text-ink">
                  {group.category}
                </h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <SkillPill key={item.name} name={item.name} icon={item.icon} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section
          id="education"
          className="mt-14 scroll-mt-8"
          aria-label="Education"
        >
          <SectionTitle>Education</SectionTitle>
          <ol className="space-y-8">
            {education.map((e) => (
              <li key={e.school}>
                <div className="flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-semibold text-ink">
                      {e.school}
                    </h3>
                    <p className="mt-0.5 text-sm text-soft">{e.degree}</p>
                  </div>
                  <p className="shrink-0 text-xs text-faint">{e.period}</p>
                </div>
                {e.detail && (
                  <p className="mt-2 text-sm leading-relaxed text-soft">
                    {e.detail}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </section>
      </main>

      <CommandPalette />
    </>
  );
}
