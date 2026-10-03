export type Game = {
  title: string;
  blurb: string;
  engine: string;
  tags: string[];
  links: { label: string; href: string }[];
};

export const games: Game[] = [
  {
    title: "fwishing",
    blurb:
      "A top-down fishing survival game. Venture from a safe hub into dangerous expedition zones: fish during the day, survive bug attacks at night.",
    engine: "Godot 4.5",
    tags: ["Survival", "Fishing", "In development"],
    links: [{ label: "Source", href: "https://github.com/clgerhardt/fwishing" }],
  },
];
