import type { NaiveVersion, Version } from '..'

export const events: Version[] = [
  {
    title: 'Minecon 2011',
    type: 'event',
    date: '2011-11-18',
    icon: 'common/event_live.png',
    learnMore: '@MINECON_2011',
    longDescription: [
      'The first official Minecon event held in 2011 at Las Vegas.',
      'The event coincided with the release of Minecraft 1.0.',
      'There were keynotes from Notch and other developers as well as many activities such as a build competition, a costume contest, and more.',
    ],
  },

  {
    title: 'Minecon 2012',
    type: 'event',
    date: '2012-11-24',
    icon: 'common/event_live.png',
    learnMore: '@MINECON_2012',
    longDescription: [
      'The second official Minecon event held in 2012 at Disney land Paris.',
      'The Redstone Update was announced during this event',
      'This event was also lived streamed on the internet, allowing many more people to watch the event.',
      'There were keynotes from Notch and other developers as well as many activities such as a build competition, a costume contest, and more.',
    ],
  },

  {
    title: 'Minecon 2013',
    type: 'event',
    date: '2013-11-02',
    icon: 'common/event_live.png',
    learnMore: '@MINECON_2013',
    longDescription: [
      'The third official Minecon event held in 2013 in Orlando, Florida.',
      'There were many activities such as a build competition, a costume contest, and more.',
    ],
  },

  {
    title: 'Minecon 2015',
    type: 'event',
    date: '2015-07-04',
    icon: 'common/event_live.png',
    learnMore: '@MINECON_2015',
    longDescription: [
      'The fourth official Minecon event held in 2015 in London.',
      'There was a first preview of the Combat Update during this event, which was released a few months later.',
      'There were keynotes from Notch and other developers as well as many activities such as a build competition, a costume contest, and more.',
    ],
  },

  {
    title: 'Minecon 2016',
    type: 'event',
    date: '2016-09-24',
    icon: 'common/event_live.png',
    learnMore: '@MINECON_2016',
    longDescription: [
      'The fifth and final official Minecon event held in 2016 in Anaheim, California. Minecones were replaced by Minecon Live, a live streamed event after this one.',
      'There was a first preview of the Exploration Update during this event, which was released a few months later.',
      'There were keynotes from Notch and other developers as well as many activities such as a build competition, a costume contest, and more.',
    ],
  },

  {
    title: 'Game bought by Microsoft',
    type: 'event',
    date: '2014-11-06',
    icon: 'common/event_microsoft.png',
    learnMore: 'https://web.archive.org/web/20140915195135/https://mojang.com/2014/09/yes-were-being-bought-by-microsoft/',
    longDescription: [
      'On November of 2014, all of Mojang was acquired by Microsoft for $2.5 billion. This included Minecraft, of course.',
      'The process began a few months earlier. Many suspected this acquisition was happening, but Mojang only confirmed it on September.',
      'According to Notch, he sold Mojang because he didn\'t want the responsibility of owning a company of such global significance.',
      'As soon as Mojang was sold, Notch and the other two founders (Carl and Jakob) left the company.',
    ],
  },

    {
    title: 'Minecraft Live March 2026',
    type: 'event',
    date: '2026-03-21',
    icon: 'common/event_live.png',
    learnMore: '@Minecraft_LIVE_-_March_2026',
    longDescription: [
      'The first Minecraft Live of 2026.',
      'This event announced the new Minecraft Dungeons II game and a a theme park called "Minecraft World" that will be built in the United Kingdom at Chessington.',
      'The live also announced the new drop "Chaos Cubed" which released a few months later.'
    ],
  },

  {
    title: 'Minecraft Live May 2026',
    type: 'event',
    date: '2026-05-30',
    icon: 'common/event_live.png',
    learnMore: '@Minecraft_LIVE_-_May_2026',
    longDescription: [
      'The second Minecraft Live of 2026, which was be held in May 2026 during TwitchCon Rotterdam 2026.',
      'This even was categorized as a "bonus" live.',
      'It contained new information on Minecraft Dungeons II as well as the name for the second Minecraft Movie "A Minecraft Movie Squared"',
      'This event also introduced us to the new Wilderness Bound drop'
    ],
  },

  {
    title: 'Minecraft Live September 2026',
    type: 'event',
    date: '2026-09-26',
    icon: 'common/event_live.png',
    learnMore: '@Minecraft_LIVE_-_September_2026',
    longDescription: [
      'The third Minecraft Live of 2026, which was be held in September 2026.',
      'This event showed us some news about Minecraft Dungeons II and the Minecraft World theme park',
      'It Also contained new information on the upcoming 2026 winter drop, which will add a new "ice cave" biome with a new frozen zombie variant.',
      'Finally it also announced that the "Sift" dimension that was already shown in Minecraft Dungeons II will be added to the main game in a future update that will be released in 2027.'
    ],
  }
] as const

export const upcomingEvents: NaiveVersion[] = [
] as const
