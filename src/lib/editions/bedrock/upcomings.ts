import type { NaiveVersion } from "..";

export const upcomings: NaiveVersion[] = [
  {
    subtitle: "26.45",
    type: "minor",
    possibleDate: "End of august",
    learnMore: "@Bedrock_Edition_26.45",
    minorFeatures: [
      { text: "Small Changes and Bug Fixes" }
    ]
  },

  {
    title: "Third Drop 2026",
    subtitle: "26.50",
    description: "Concrete and wool stairs and slabs, poplar wood set, dappled forest biome, cushions",
    type: "drop",
    possibleDate: "Autumn 2026",
    icon: "/bedrock/version_26_5.png",
    learnMore: "@Bedrock_Edition_26.50",
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
