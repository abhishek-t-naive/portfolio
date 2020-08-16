module.exports = {
  siteTitle: 'Abhishek Tyagi | Hardware Engineer',
  siteDescription:
    'Abhishek Tyagi is a hardware engineer based in Bengaluru, KA specializing in building architectures for processing upcoming applications like ML, AR, VR etc.',
  siteKeywords:
    'Abhishek Tyagi, Abhishek, Tyagi, abhishek-t-naive, _abhishek42, Hardware Engineer, DTU',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-148137921-1',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Abhishek Tyagi',
  location: 'Bengaluru, KA',
  email: 'abhishekdtu6@gmail.com',
  github: 'https://github.com/abhishek-t-naive',
  twitterHandle: '@_abhishek42',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/abhishek-t-naive',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/abhishek-tyagi-a1873596/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/_abhishek42',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
