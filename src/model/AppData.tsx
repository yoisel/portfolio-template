import { DefaultImages } from '../components/DefaultImages';
import { AppConfig } from './AppData.interface';

// json-like object for app configuration
export const appConfig: AppConfig = {
  title: 'Fulano Mengano',
  avatarImage: DefaultImages.Avatar,
  social: {
    github: 'https://github.com/random',
    linkedin: 'https://www.linkedin.com/in/random/',
    stackoverflow: 'https://stackoverflow.com/users/000000/random'
  },
  sections: [
    {
      id: 'experience',
      title: 'Work Experience',
      backgroundImage: DefaultImages.MathDark1,
      portfolioPageItems: [
        {
          subTitle1: '2015-Today',
          title: 'CEO',
          subTitle2: 'Skynet Corp',
          link: 'https://www.skynet.com',
          linkText: 'www.skynet.com',
          contents: [
            "Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives.",
            'The aggregate of our joy and suffering, thousands of confident religions, ideologies, and economic doctrines, every hunter and forager, every hero and coward, every creator and destroyer of civilization, every king and peasant, every young couple in love, every mother and father, hopeful child, inventor and explorer, every teacher of morals, every corrupt politician, every "superstar," every "supreme leader," every saint and sinner in the history of our species lived there--on a mote of dust suspended in a sunbeam.'
          ],
          image: DefaultImages.Networks
        },
        {
          subTitle1: '2005-2010',
          title: 'Lecturer, Large Language Models course',
          subTitle2: 'Stelvia University',
          contents:
            'We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.',
          image: DefaultImages.Signals
        },
        {
          subTitle1: '2000-2005',
          title: 'Teaching Assistant',
          subTitle2: 'Stelvia University',
          contents:
            "In the last 24 hours we have seen facilities now being created for the greatest and most complex exploration in man's history. We have felt the ground shake and the air shattered by the testing of a Saturn C-1 booster rocket, many times as powerful as the Atlas which launched John Glenn, generating power equivalent to 10,000 automobiles with their accelerators on the floor. We have seen the site where the F-1 rocket engines, each one as powerful as all eight engines of the Saturn combined, will be clustered together to make the advanced Saturn missile, assembled in a new building to be built at Cape Canaveral as tall as a 48 story structure, as wide as a city block, and as long as two lengths of this field.",
          image: DefaultImages.Education
        }
      ]
    },
    {
      id: 'education',
      title: 'Education',
      backgroundImage: DefaultImages.Universe,
      portfolioPageItems: [
        {
          subTitle1: '2005-2006',
          title: 'Stelvia University',
          subTitle2: 'Master in Applied Computer Science',
          contents:
            'We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.',
          image: DefaultImages.Education
        },
        {
          subTitle1: '2001-2004',
          title: 'Cosmic University',
          subTitle2: 'Bachalor in Computer Science',
          contents:
            'There is no strife, no prejudice, no national conflict in outer space as yet. Its hazards are hostile to us all. Its conquest deserves the best of all mankind, and its opportunity for peaceful cooperation many never come again. But why, some say, the moon? Why choose this as our goal? And they may well ask why climb the highest mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play Texas?',
          image: DefaultImages.Education
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
      backgroundImage: DefaultImages.SignalsDark,
      portfolioPageItems: [
        {
          title: 'Project 1',
          subTitle2: 'Cloud System',
          contents:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
          image: DefaultImages.Signals
        },
        {
          subTitle1: '2001-2004',
          title: 'Project 2',
          subTitle2: 'Video Streaming System',
          contents:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image: DefaultImages.Music
        }
      ]
    }
  ]
};
