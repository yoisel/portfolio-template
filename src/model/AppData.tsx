import { DefaultImages } from '../components/DefaultImages';
import { AppConfig } from './AppData.interface';

// json-like object for app configuration
export const appConfig: AppConfig = {
  title: "Yoisel's Portfolio",
  avatarImage: DefaultImages.Avatar,
  social: {
    github: 'https://github.com/yoisel',
    linkedin: 'https://www.linkedin.com/in/yoisel/',
    stackoverflow: 'https://stackoverflow.com/users/501196/yms'
  },
  sections: [
    {
      id: 'about',
      title: 'About Me',
      backgroundImage: DefaultImages.BeachDark,
      portfolioPageItems: [
        {
          contents: [
            `I am a Full Stack software developer with more than 15 years of experience, including a few leading teams of developers. 
                     I am particularly conscious about security and code quality in the products I work on. 
                     I enjoy solving problems, facing challenges and learning new technologies.`,
            'I like biking, light jogging, science-fiction - fantasy books and films.',
            'I learned my first programming language (Logo) at age 11, then moved into MSX Basic and Pascal by age 16. I found my passion and I have never looked back since then.',
            'I was born in Cuba, an island in the Caribbean Sea, and I currently live in Montreal, Canada.'
          ],
          image: DefaultImages.Coffee
        }
      ]
    },
    {
      id: 'education',
      title: 'Education',
      backgroundImage: DefaultImages.Universe,
      portfolioPageItems: [
        {
          subTitle1: '2010 - 2011',
          title: 'Concordia University, Montreal, Canada',
          subTitle2: 'Master in Applied Computer Science',
          link: 'https://www.concordia.ca/',
          linkText: 'www.concordia.ca',
          contents: '',
          image: DefaultImages.Concordia
        },
        {
          subTitle1: '2001-2004',
          title: 'Havana University (Universidad de la Habana)',
          subTitle2: 'Bachalor in Computer Science',
          link: 'https://www.uh.cu',
          contents: '',
          image: DefaultImages.UH
        }
      ]
    },
    {
      id: 'experience',
      title: 'Work Experience',
      backgroundImage: DefaultImages.MathDark1,
      portfolioPageItems: [
        {
          subTitle1: 'April 2016 - Today',
          title: 'Senior Software Developer / Tech Lead',
          subTitle2: 'Hewlett Packard Enterprise - Montreal, Canada',
          link: 'https://www.hpe.com',
          linkText: 'www.hpe.com',
          // \u2022 unicode character for bullet point
          contents: [
            '\u2022 Technical leading on the development of a React-based components library for Aruba Central, a cloud-based Network Management System, with a distributed team across multiple geographies.',
            '\u2022 Development of software modules for Aruba Central and Aruba Instant On.',
            '\u2022 Development of software modules for Aruba OS, a Linux-based embedded operating system for managed wireless networks.',
            '',
            'Technologies used:',
            '    React, MUI, styled-components, Storybook, Cypress, Jenkins, TypeScript, HTML, CSS, SCSS,',
            '    Docker, Angular, AngularJS, Javascript, ES6, NodeJS, Java, Linux-based Embedded Systems,',
            '    ANSI C, Network protocols, Wifi (802.11) specifications.'
          ],
          image: DefaultImages.HPE
        },
        {
          subTitle1: '2009 - 2016',
          title: 'Senior Software Developer / Team Lead',
          subTitle2: 'Amyuni Technologies',
          link: 'https://www.amyuni.com',
          linkText: 'www.amyuni.com',
          contents: [
            `Amyuni Technologies is a software company specialized in the development of applications and libraries for end users and developers that facilitates processing and producing digital documents such as PDF, PostScript and Microsoft XPS.`,
            '\u2022 Team leader since January 2013, controlling the development process and keeping track of the status of each project, planning and prioritizing the tasks for the development team, establishing and updating the protocol for quality assurance and participating in the hiring process for new developers.',
            '\u2022 Development of software modules for Amyuni PDF libraries using several technologies and programming languages (.net, C#, C, C++, ActiveX, Windows Driver Kit, Task Parallel Libraries, Async-programming).',
            '\u2022 Development of a JavaScript interpreter and its corresponding Document Object Model for PDF dynamic forms (C++, yacc, bison, ECMA-Script specifications).',
            '\u2022 Development of a Windows Embedded CE platform with several customized software modules.',
            '\u2022 Development of several software modules for iOS and Mac OS X.'
          ],
          image: DefaultImages.Amyuni
        },
        {
          subTitle1: '2001-2009',
          title: 'Senior Software Developer / Team Lead',
          subTitle2: 'GMixon (remote from Cuba)',
          link: 'https://www.gixon.com',
          linkText: 'www.gmixon.coom',
          contents: [
            'Development of desktop-based client/server systems, web applications, digital audio and digital video broadcasting systems, and mobile applications.',
            'Team leader during the development of several projects.'
          ],
          image: DefaultImages.Gmixon
        },
        {
          subTitle1: '2005-2009',
          title: 'Software Developer',
          subTitle2: 'Cuban Institute of Radio and Television (ICRT)',
          link: 'https://www.icrt.gob.cu',
          linkText: 'www.icrt.gob.cu',
          contents: [
            'Development of applications that provided content management, multi-channel audio playback support, and sound effects for radio stations.',
            'These applications were built using technologies such as C++, Delphi Win32, DirectX, .Net Framework/C#, and Postgresql. Additionally, I provided technical consulting on digital audio and video topics.'
          ],
          image: DefaultImages.ICRT
        },
        {
          subTitle1: '2003-2005',
          title: 'Lecturer / Teaching Assistant',
          subTitle2: 'Havana University, Faculty of Mathematics and Computer Science',
          link: 'https://www.uh.cu',
          linkText: 'www.uh.cu',
          contents: [
            '\u2022 Lecturer on a Delphi Programming course for undergraduate students in Mathematics.',
            '\u2022 Teaching Assistant for a course on C++ and Windows API for undergraduate students in Computer Science.',
            '\u2022 Teaching Assistant for a course on Delphi/Pascal for undergraduate students in Biology.',
            '\u2022 Network administration (Windows Server and Active Directory, Debian Linux).'
          ],
          image: DefaultImages.UH
        }
      ]
    },
    {
      id: 'projects',
      title: 'Projects',
      description: 'Some examples of project where I have participated as part of a team',
      backgroundImage: DefaultImages.SignalsDark,
      portfolioPageItems: [
        {
          title: 'Aruba OS',
          subTitle2: 'HPE Aruba, Montreal, Canada',
          contents: [
            'Aruba OS is a Network Management System for HPE Aruba Access Points and Controllers.',
            'A web application is provided at each management level.',
            'Additional web applications serve as troubleshooting tools.',
            'Development for Aruba OS involves embedded linux, ANSI C, AngularJS, Docker.'
          ],
          image: DefaultImages.AOS
        },
        {
          title: 'Amyuni PDF Converter',
          subTitle2: 'Amyuni Technologies, Montreal, Canada',
          contents:
            'Amyuni PDF Converter is a software tool that allows users to create and edit digital documents such as PDF, PostScript or XPS. It is composed by a Microsoft Certified virtual printer driver that developers can use and control from a Windows application. It was implemented in a mix of C and C++',
          image: DefaultImages.AmyuniPdfConverter
        },
        {
          title: 'NewDj',
          subTitle2: 'GMixon, France',
          contents: [
            'NewDJ is a Windows application integrated to DJ consoles for creating audio mix and applying effects.',
            ' It was implemented using Delphi, C++ and DirectSound'
          ],
          image: DefaultImages.NewDJ
        },
        {
          title: 'RadioSys',
          subTitle2: 'Cuban Institute of Radio and Television, Havana, Cuba',
          contents:
            'RadioSys is a Windows application for radio stations with content management, multi-channel support and sound effects. The client component (player) was implemented using C++ and Delphi, DirectX. Server-side application was implemented using .Net Framework/C# and PostgreSQL.',
          image: DefaultImages.RadioSys
        }
      ]
    }
  ]
};
