// First, install react-icons:
// npm install react-icons

import {
  SiNodedotjs,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiFlutter,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  // SiAmazonaws,
  // SiAzure, // Changed from SiMicrosoftazure
  SiGooglecloud,
  SiExpress,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiD3Dotjs,
  SiStripe,
  // SiReactnative,
  SiRedux,
  SiOpencv,
  SiStreamlit,
  SiSocketdotio,
  SiPandas,
  SiPlotly,
  SiFastapi,
  SiFlask,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiLaravel,
  SiRuby,
  SiRubyonrails,
  SiRedis,
  SiMysql,
  SiBootstrap,
  SiSass,
  SiWebpack,
  SiVite,
  SiGit,
  SiJira,
  SiConfluence,
  SiJenkins
} from 'react-icons/si';

// Fallback icon component for any missing icons
// const FallbackIcon = ({ color, size = 24 }) => (
//   <div 
//     style={{ 
//       width: size, 
//       height: size, 
//       backgroundColor: color, 
//       borderRadius: '50%' 
//     }} 
//   />
// );

export const techStack = [
  // Backend Technologies
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#339933',
    category: 'backend'
  },
  {
    name: 'Python',
    icon: SiPython,
    color: '#3776AB',
    category: 'backend'
  },
  {
    name: 'FastAPI',
    icon: SiFastapi,
    color: '#009688',
    category: 'backend'
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    color: '#000000',
    category: 'backend'
  },
  {
    name: 'Django',
    icon: SiDjango,
    color: '#092E20',
    category: 'backend'
  },
  {
    name: 'PostgreSQL',
    icon: SiPostgresql,
    color: '#4169E1',
    category: 'backend'
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248',
    category: 'backend'
  },
  {
    name: 'Flask',
    icon: SiFlask,
    color: '#000000',
    category: 'backend'
  },
  {
    name: 'PHP',
    icon: SiPhp,
    color: '#777BB4',
    category: 'backend'
  },
  {
    name: 'Laravel',
    icon: SiLaravel,
    color: '#FF2D20',
    category: 'backend'
  },
  {
    name: 'Ruby',
    icon: SiRuby,
    color: '#CC342D',
    category: 'backend'
  },
  {
    name: 'Ruby on Rails',
    icon: SiRubyonrails,
    color: '#CC0000',
    category: 'backend'
  },
  {
    name: 'Redis',
    icon: SiRedis,
    color: '#DC382D',
    category: 'backend'
  },
  {
    name: 'MySQL',
    icon: SiMysql,
    color: '#4479A1',
    category: 'backend'
  },
  {
    name: 'Firebase',
    icon: SiFirebase,
    color: '#FFCA28',
    category: 'backend'
  },
  
  // Frontend Technologies
  {
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
    category: 'frontend'
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#000000',
    category: 'frontend'
  },
  {
    name: 'Vue.js',
    icon: SiVuedotjs,
    color: '#4FC08D',
    category: 'frontend'
  },
  {
    name: 'Angular',
    icon: SiAngular,
    color: '#DD0031',
    category: 'frontend'
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06B6D4',
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
    category: 'frontend'
  },
  {
    name: 'Bootstrap',
    icon: SiBootstrap,
    color: '#7952B3',
    category: 'frontend'
  },
  {
    name: 'Sass',
    icon: SiSass,
    color: '#CC6699',
    category: 'frontend'
  },
  {
    name: 'Webpack',
    icon: SiWebpack,
    color: '#8DD6F9',
    category: 'frontend'
  },
  {
    name: 'Vite',
    icon: SiVite,
    color: '#646CFF',
    category: 'frontend'
  },
  {
    name: 'D3.js',
    icon: SiD3Dotjs,
    color: '#F9A03C',
    category: 'frontend'
  },
  {
    name: 'Plotly',
    icon: SiPlotly,
    color: '#3F4F75',
    category: 'frontend'
  },
  {
    name: 'Redux',
    icon: SiRedux,
    color: '#764ABC',
    category: 'frontend'
  },
  
  // Mobile & Cross-Platform
  // {
  //   name: 'React Native',
  //   icon: SiReactnative,
  //   color: '#61DAFB',
  //   category: 'mobile'
  // },
  {
    name: 'Flutter',
    icon: SiFlutter,
    color: '#02569B',
    category: 'mobile'
  },
  
  // Cloud & DevOps
  {
    name: 'Docker',
    icon: SiDocker,
    color: '#2496ED',
    category: 'devops'
  },
  {
    name: 'Kubernetes',
    icon: SiKubernetes,
    color: '#326CE5',
    category: 'devops'
  },
  // {
  //   name: 'AWS',
  //   icon: SiAmazonaws,
  //   color: '#232F3E',
  //   category: 'cloud'
  // },
  // {
  //   name: 'Microsoft Azure',
  //   icon: SiAzure, // Changed from SiMicrosoftazure
  //   color: '#0078D4',
  //   category: 'cloud'
  // },
  {
    name: 'Google Cloud',
    icon: SiGooglecloud,
    color: '#4285F4',
    category: 'cloud'
  },
  {
    name: 'Vercel',
    icon: SiVercel,
    color: '#000000',
    category: 'cloud'
  },
  
  // AI/ML & Data Science
  {
    name: 'TensorFlow',
    icon: SiTensorflow,
    color: '#FF6F00',
    category: 'ai-ml'
  },
  {
    name: 'PyTorch',
    icon: SiPytorch,
    color: '#EE4C2C',
    category: 'ai-ml'
  },
  {
    name: 'Scikit-learn',
    icon: SiScikitlearn,
    color: '#F7931E',
    category: 'ai-ml'
  },
  {
    name: 'OpenCV',
    icon: SiOpencv,
    color: '#5C3EE8',
    category: 'ai-ml'
  },
  {
    name: 'Pandas',
    icon: SiPandas,
    color: '#150458',
    category: 'ai-ml'
  },
  {
    name: 'Streamlit',
    icon: SiStreamlit,
    color: '#FF4B4B',
    category: 'ai-ml'
  },
  
  // APIs & Integration
  {
    name: 'Socket.io',
    icon: SiSocketdotio,
    color: '#010101',
    category: 'api'
  },
  {
    name: 'Stripe',
    icon: SiStripe,
    color: '#008CDD',
    category: 'api'
  },
  
  // Development Tools
  {
    name: 'Git',
    icon: SiGit,
    color: '#F05032',
    category: 'tools'
  },
  {
    name: 'Jira',
    icon: SiJira,
    color: '#0052CC',
    category: 'tools'
  },
  {
    name: 'Confluence',
    icon: SiConfluence,
    color: '#172B4D',
    category: 'tools'
  },
  {
    name: 'Jenkins',
    icon: SiJenkins,
    color: '#D24939',
    category: 'tools'
  }
];

// Helper function to get unique technologies by name
export const getUniqueTechStack = () => {
  const seen = new Set();
  return techStack.filter(tech => {
    if (seen.has(tech.name)) {
      return false;
    }
    seen.add(tech.name);
    return true;
  });
};

// Alternative: If SiAzuredevops also doesn't work, you can use the FallbackIcon
// Just replace the Microsoft Azure entry with:
/*
  {
    name: 'Microsoft Azure',
    icon: FallbackIcon,
    color: '#0078D4',
    category: 'cloud'
  },
*/