import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
  {
    title: "Vibrant Visuals",
    type: "minor",
    possibleDate: "Future",
    icon: "/java/version_vibrant_visuals.png",
    funFact: "Did you know? A similar update, the \"Super Duper Graphics Pack\" was announced in 2017, but was cancelled in 2019 due to technical limitations.\n\nThis update has already been released for the Bedrock Edition of the game, as part of the Chase the Skies game drop.",
    learnMore: "@Vibrant_Visuals",
    mainFeatures: [
      { text: "Major visual overhaul" },
      { text: "Directional Lights with Pixel-aligned shadows" },
      { text: "Specular highlights" },
      { text: "Emissive texures" },
      { text: "Water Reflections" },
    ]
  },

  {
    title: "Third Drop 2026",
    subtitle: "26.3",
    description: "Concrete and wool stairs and slabs, poplar wood set, dappled forest biome, cushions",
    type: "drop",
    possibleDate: "Autumn 2026",
    icon: "/java/version_26_3.png",
    learnMore: "@Java_Edition_26.3",
    mainFeatures: [
      { text: "Concrete stairs and slabs" },
      { text: "Wool stairs and slabs" },
      { text: "Poplar wood set" },
      { text: "Dappled forest biome" },
      { text: "Cushions" }
    ],
    minorFeatures: [
      { text: "New explorer maps" },
      { text: "Straw bed" },
      { text: "Shelf mushroom" },
      { text: "Abandonned camp" },
    ]
  }
] as const;
