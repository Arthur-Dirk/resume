import avatar from './images/avatar.png';

const ResumeData = {
  myName: 'Arthur Dirk',
  
  avatar: avatar,

  tabLabels: ['Skills','Experience','Education'],
  
  profileSummary: `Hi i am Arthur Dirk. I am working for the Sanlam group for 9 years. I have experience in IT, and met and exceeded my Goals and expectations i had to perform. I am a diligent worker, who take pride in my work. I am studing towards Full Stack Web Developer partime. `,
  
  buttonList: [
    {
      label: 'Github',
      link: '<https://github.com/Arthur-Dirk>'
    },
    
  ],

  skillsList: [
    'Teamwork', 
    'Softskills,Hardskills',
    'HTML',
    'CSS',
    'React',
    'Javascript',
    'Nodejs',
    'Mongo DB',
    'Express',
    'Nextjs',
  ],

  experienceList: [
    {
      company: 'Sanlam',
      projects: [
        {
          id: 1,
          value: `Sanlam, and Santam Service Desk Agent`
        },
    
      ]
    },
    {
      company: 'Santam',
      projects: [
        {
          id: 1,
          value: `Commercial and Personal lines Insurance Consultant`
        },
        {
          id: 2,
          value: `Underwriter`
        }

        
      ] // end projects array
    },
{
    company: 'Old Mutual',
    projects: [
      {
        id: 1,
        value: `Resolutions Administrator`
      },
      
    ] // end projects array
  },
  {
    company: 'Auto and General',
    projects: [
      {
        id: 1,
        value: `Personal Lines Consultant`
      },
      {
        id: 1,
        value: `Claims Consultant`
      },
  
    ]
  },
  
  {
    company: 'Direct Axis',
    projects: [
      {
        id: 1,
        value: `Approvals Consultant`
      },
      {
        id: 1,
        value: `Wesbank Cashpower Consultant`
      },
    ]
  },

  {
    company: 'Vodacom',
    projects: [
      {
        id: 1,
        value: `All Service Consultant`
      },
      
    ] // end projects array
  },
  ] ,
  educationList : [
      {
        schoolName: 'HyperionDev',
        Course: 'Fullstack Web Developer',
        schoolLocation: 'Woodstock,Cape Town',
        major: 'HTML, CSS, Javascript, React, NodeJS, MongoDB, Express, NextJS',
        graduationYear: '2019'
      },
      {
        schoolName: 'Dynamic Training Solutions',
        Course: 'A+ Pc technician',
        schoolLocation: 'Cape Town',
        graduationYear: '2000'
      },
      {
        schoolName: 'Direct Axis',
        Course: 'FAIS',
        schoolLocation: 'Claremont,Cape Town',
        graduationYear: '2004'
      },
    ]
} // end ResumeData

export default ResumeData;