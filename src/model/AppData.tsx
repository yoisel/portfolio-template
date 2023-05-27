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
            'I learned my first programming language (Logo) at age 11, then moved into MSX Basic and Pascal by age 16. I found my passion in programming and I have never looked back since then.',
            'I was born in Cuba, an island in the Caribbean Sea, and I currently live in Montreal, Canada.'
          ],
          image: DefaultImages.Coffee
        }
      ]
    },
    {
      id: 'experience',
      title: 'Recent Roles',
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
        }
      ]
    },
    {
      id: 'projects',
      title: 'Recent Projects',
      description: 'Some examples of project where I have participated as part of a team',
      backgroundImage: DefaultImages.SignalsDark,
      portfolioPageItems: [
        {
          title: 'Aruba Central',
          link: 'https://www.arubanetworks.com/video/?v=Products%20and%20Solutions/aruba_next_gen_central_-1.mp4',
          subTitle2: 'HPE Aruba Networking, Montreal, Canada',
          contents: [
            `Aruba Central is a cloud-based network management platform that offers centralized control and visibility
             over Aruba networking devices and services, providing a unified interface for monitoring and configuring
             Aruba switches, access points, and controllers across distributed locations.`,
            `With Aruba Central, organizations can benefit from features such as network monitoring, configuration management,
            firmware updates, role-based access control, analytics, and reporting. 
            The cloud-based nature of Aruba Central enables easy scalability.`,
            'Development for Aruba Central involves Typescript, React, Angular, Grapql, Kubernetes, among other toolchains.'
          ],
          image: DefaultImages.ArubaCNX
        },
        {
          title: 'Aruba OS',
          subTitle2: 'HPE Aruba Networking, Montreal, Canada',
          link: 'https://www.arubanetworks.com/resource/aos-10-at-a-glance',
          contents: [
            'Aruba OS is a Network Management System for HPE Aruba Access Points and Controllers.',
            'A web application is provided at each management level.',
            'Additional web applications serve as troubleshooting tools.',
            'Development for Aruba OS involves Embedded Linux, ANSI C, AngularJS, Docker, among other toolchains.'
          ],
          image: DefaultImages.AOS
        },
        {
          title: 'Amyuni PDF Converter',
          subTitle2: 'Amyuni Technologies, Montreal, Canada',
          contents:
            'Amyuni PDF Converter is a software tool that allows users to create and edit digital documents such as PDF, PostScript or XPS. It is composed by a Microsoft Certified virtual printer driver that developers can use and control from a Windows application. It was implemented in a mix of C and C++',
          image: DefaultImages.AmyuniPdfConverter2
        },
        {
          title: 'Amyuni PDF Creator',
          subTitle2: 'Amyuni Technologies, Montreal, Canada',
          contents:
            'Amyuni PDF Creator is a Windows-based software library that allows developers to generate, edit, display and print PDF documents programmatically. This library provides developers with control over document formatting, page layouts, text and image insertion, watermarking, encryption, and digital signature capabilities, supporting a wide range of programming languages and frameworks (.net, C++, COM).',
          image: DefaultImages.AmyuniPdfCreator
        },
        {
          title: 'Web portfolio template',
          link: 'https://github.com/yoisel/portfolio-template',
          subTitle2: 'Open Source',
          contents:
            'An unencumbered portfolio template based on React and Mui. It provides a responsive design and it is offered with MIT open source license',
          image: DefaultImages.PortfolioTemplate
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
    }
  ]
};
