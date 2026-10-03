export type Role = {
  title: string;
  period: string;
  summary?: string;
  groups: { heading: string; points: string[] }[];
};

export type Job = {
  slug: string;
  company: string;
  url: string;
  period: string;
  summary?: string;
  stack: { label?: string; items: string }[];
  roles: Role[];
};

export const experience: Job[] = [
  {
    slug: "t-mobile",
    company: "T-Mobile",
    url: "https://www.t-mobile.com/",
    period: "Oct 2020 - Present",
    stack: [
      {
        label: "Current",
        items:
          "Angular, TypeScript, HAPI.js BFF, Adobe Experience Manager (AEM), Java, Spring Boot, Maven, Splunk, Grafana, GitLab",
      },
      {
        label: "Legacy",
        items: "Angular (older versions), AEM Servlets, monolithic application architecture",
      },
    ],
    roles: [
      {
        title: "Senior Software Engineer",
        period: "Dec 2025 - Present",
        groups: [
          {
            heading: "Feature Development & Leadership",
            points: [
              "Led the development of features from concept to delivery, including LOE estimation, dependency identification, and risk mitigation.",
            ],
          },
          {
            heading: "Security, Stability, and Scalability",
            points: [
              "Secured client configurations and secrets, adhering to enterprise security standards.",
              "Standardized API integration by migrating to internal proxies, improving security and maintainability.",
              "Enhanced application logging, enabling proactive alerts and robust dashboards in Splunk and Grafana.",
              "Resolved dependencies with critical vulnerabilities and upgraded Angular applications for improved security.",
            ],
          },
          {
            heading: "Operational Excellence",
            points: [
              "Provided on-call support, resolved production defects, and performed triages for system outages.",
              "Reviewed 300+ merge requests annually, ensuring code quality and adherence to best practices.",
              "Authored technical documentation and developed sequence diagrams to streamline knowledge sharing.",
            ],
          },
          {
            heading: "Collaboration & Mentorship",
            points: [
              "Supported teams through knowledge-sharing sessions, project discussions, and triages.",
            ],
          },
        ],
      },
      {
        title: "Software Engineer",
        period: "Oct 2020 - Nov 2025",
        summary:
          "Part of the Digital Account Management team, focused on modernizing postpaid account services for T-Mobile's web customers.",
        groups: [
          {
            heading: "Legacy Modernization",
            points: [
              "Migrated ~30 user flows from a legacy Angular + AEM Servlet application to modern Angular monorepos backed by HAPI.js BFFs and AEM.",
              "Flows included high-impact blocking features such as call and message blocking, international roaming, and multi-device management (DIGITS), among others.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "hntb",
    company: "HNTB",
    url: "https://www.HNTB.com/",
    period: "May 2018 - Oct 2020",
    stack: [{ items: "TypeScript, Vue.js, Python (Django), AWS (DBS, EC2, S3), GitHub" }],
    roles: [
      {
        title: "Application Developer",
        period: "Intern to full-time",
        summary:
          "Contributed to the rapid development of resource allocation and public outreach tools, transitioning from intern to full-time application developer.",
        groups: [
          {
            heading: "Feature Development",
            points: [
              "Designed and implemented frontend and backend features, delivering user-friendly and efficient solutions.",
            ],
          },
          {
            heading: "Infrastructure & Deployment",
            points: ["Developed and maintained AWS architecture, streamlining deployments and releases."],
          },
          {
            heading: "Agile & Team Collaboration",
            points: [
              "Participated in SCRUM meetings and created detailed tickets for efficient task management.",
              "Reviewed team merge requests, ensuring code quality and maintainability.",
            ],
          },
          {
            heading: "Stakeholder Engagement",
            points: [
              "Attended stakeholder public outreach meetings to gain insights into user needs and improve services.",
            ],
          },
        ],
      },
    ],
  },
];
