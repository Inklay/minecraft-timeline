import type { NaiveVersion } from '..'

export const upcomings: NaiveVersion[] = [
  {
    title: 'Wilderness Bound',
    subtitle: '26.50',
    description: 'Concrete and wool stairs and slabs, poplar wood set, dappled forest biome, cushions',
    funFact: 'Did you know? The name of this drop was announced during the Fall Starts MC Championship.',
    type: 'drop',
    possibleDate: '2026-09-15',
    icon: '/bedrock/version_26_5.png',
    learnMore: '@Bedrock_Edition_26.50',
    mainFeatures: [
      { text: 'Concrete stairs and slabs' },
      { text: 'Wool stairs and slabs' },
      { text: 'Poplar wood set' },
      { text: 'Dappled forest biome' },
      { text: 'Cushions' },
    ],
    minorFeatures: [
      { text: 'New explorer maps' },
      { text: 'Straw bed' },
      { text: 'Shelf mushroom' },
      { text: 'Abandoned camp' },
    ],
  },
] as const
