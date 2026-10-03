export type Project = {
  title: string;
  blurb: string;
  engine: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Risk of Resources",
    blurb:
      "Make and join Risk of Rain 2 modded speed run challenges with other players.",
    engine: "Astro, Svelte, Tailwind CSS, Go",
    tags: ["Web", "Speedrunning", "Risk of Rain 2"],
    links: [{ label: "Visit", href: "https://riskofresources.com/" }],
  },
  {
    title: "Better Twitch Sidebar",
    blurb:
      "A Chrome extension that adds a sidebar to Twitch.tv, letting you view your followed channels in a more organized manner.",
    engine: "TypeScript",
    tags: ["Chrome extension", "Twitch"],
    links: [
      {
        label: "Source",
        href: "https://github.com/clgerhardt/better-twitch-sidebar-extension",
      },
    ],
  },
];
